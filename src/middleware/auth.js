const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

exports.requireLogin = async (req, res, next) => {
    if (req.cookies?.token) {
        const token = req.cookies.token;
        try {
            const decoded = jwt.verify(token, SECRET_KEY);

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

exports.requireRole = (role = 'user') => {
    return (req, res, next) => {
        if (req.cookies?.token) {
            const token = req.cookies.token;
            try {
                const decoded = jwt.verify(token, SECRET_KEY);
                const { roles: rolesUser } = decoded;
                if (rolesUser.includes(role)) {
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
};
