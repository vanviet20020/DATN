const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to set user in request
const setUserInRequest = (req, res, next) => {
    if (req.cookies?.token) {
        const token = req.cookies.token;
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
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
