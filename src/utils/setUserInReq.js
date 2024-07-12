const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

// Middleware to set user in request
const setUserInRequest = (req, res, next) => {
    if (req.cookies?.token) {
        const token = req.cookies.token;
        jwt.verify(token, SECRET_KEY, (err, decode) => {
            if (err) {
                req.user = '';
                next();
            } else {
                req.user = decode;
                console.log(req.user);
                next();
            }
        });
    } else {
        req.user = '';
        next();
    }
};

module.exports = setUserInRequest;
