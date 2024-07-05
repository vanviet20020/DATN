const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');

const secret_key = process.env.ACCESS_TOKEN_SECRET || 'Viet';

exports.requireLogin = async (req, res, next) => {
    if (req.cookies?.token) {
        const token = req.cookies.token;
        try {
            const decoded = jwt.verify(token, secret_key);

            const user = await User.findOne({
                email: decoded.email,
                is_deleted: { $ne: true },
            }).lean();

            if (!user) {
                throw new Error();
            }

            req.user = user;
            next();
        } catch (err) {
            return res.status(401).send({
                message: 'Bạn cần đăng nhập để thực hiện thao tác này',
            });
        }
    } else {
        return res.status(401).send({
            message: 'Bạn cần đăng nhập để thực hiện thao tác này',
        });
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.cookies?.token) {
        const token = req.cookies.token;
        try {
            const decoded = jwt.verify(token, secret_key);
            const { role } = decoded;
            if (role === true) {
                next();
            } else {
                res.status(403).send('Bạn không có quyền truy cập!');
            }
        } catch (err) {
            return res.status(401).send('Không có quyền truy cập');
        }
    } else {
        return res.status(401).send('Không có quyền truy cập');
    }
};
