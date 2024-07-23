const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

exports.requireRole = (roles = ['user']) => {
    return (req, res, next) => {
        if (req.cookies?.token) {
            const token = req.cookies.token;
            try {
                const decoded = jwt.verify(token, SECRET_KEY);
                const { roles: rolesUser } = decoded;

                const hasValidRole = roles.some((role) =>
                    rolesUser.includes(role),
                );
                if (hasValidRole) {
                    next();
                } else {
                    res.status(403).send('Bạn không có quyền truy cập!');
                }
            } catch (err) {
                res.status(401).send('Không có quyền truy cập');
            }
        } else {
            res.status(401).send('Không có quyền truy cập');
        }
    };
};
