const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret_key = process.env.SECRET_KEY || "Viet";

exports.requireLogin = (req, res, next) => {
    if (req.cookies && req.cookies.token) {
        next();
    } else {
        res.redirect("/login-form");
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.cookies && req.cookies.token) {
        const token = req.cookies.token;
        try {
            const decoded = jwt.verify(token, secret_key);
            const { role } = decoded;
            if (role === true) {
                next();
            } else {
                res.status(403).send("Bạn không có quyền truy cập!");
            }
        } catch (err) {
            return res.status(401).send("Không có quyền truy cập");
        }
    } else {
        return res.status(401).send("Không có quyền truy cập");
    }
};
