const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');

const secret_key = process.env.SECRET_KEY || 'Viet';

exports.requireLogin = async (req, res, next) => {
    if (req.cookies && req.cookies.token) {
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

            // Lưu thông tin người dùng vào đối tượng req để các controller sau có thể truy cập
            req.user = user;
            next();
        } catch (err) {
            return res.status(401).send({
                error: 'Bạn cần đăng nhập để thực hiện thao tác này',
            });
        }
    } else {
        // return res.redirect('/login-form');
        return res.status(401).send({
            error: 'Bạn cần đăng nhập để thực hiện thao tác này',
        });
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.cookies && req.cookies.token) {
        const token = req.cookies.token;
        try {
            const decoded = jwt.verify(token, secret_key);
            const { role } = decoded;
            console.log(role);
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
