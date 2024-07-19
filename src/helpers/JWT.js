const jwt = require('jsonwebtoken');
require('dotenv').config();

const client = require('../config/connectRedis');

const signAccessToken = async (data) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            data,
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '15m',
            },
            (err, token) => {
                if (err) {
                    console.error('Error generating token:', err);
                    return reject(err);
                }

                resolve(token);
            },
        );
    });
};

const signRefreshToken = async (data) => {
    const userID = data.id.toString();

    return new Promise(async (resolve, reject) => {
        jwt.sign(
            data,
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: '30d',
            },
            async (err, token) => {
                if (err) {
                    console.error('Error generating refresh token:', err);
                    return reject(err);
                }

                await client.set(userID, token, {
                    EX: 30 * 24 * 60 * 60,
                });

                resolve(token);
            },
        );
    });
};

const verifyRefreshToken = async (refreshToken) => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) return reject(err);

                const reply = await client.get(decoded.id.toString());

                if (reply === refreshToken) {
                    return resolve(decoded);
                }

                reject('Unauthorized');
            },
        );
    });
};

module.exports = { signAccessToken, signRefreshToken, verifyRefreshToken };
