const jwt = require('jsonwebtoken');
require('dotenv').config();

const {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken,
} = require('../../helpers/JWT');

module.exports = async (args) => {
    const { refreshToken } = args;

    if (!refreshToken) return { message: 'Đăng nhập không thành công' };

    const decoded = await verifyRefreshToken(refreshToken);

    const data = {
        id: decoded.id,
        fullname: decoded.fullname,
        email: decoded.email,
        phoneNumber: decoded.phone_number,
        coin: decoded.coin,
        roles: decoded.roles,
    };

    const accessToken = await signAccessToken(data);
    const newRefreshToken = await signRefreshToken(data);

    if (accessToken && refreshToken) {
        return {
            token: accessToken,
            refreshToken: newRefreshToken,
            message: 'Đăng nhập thành công',
        };
    } else {
        return { message: 'Đăng nhập không thành công' };
    }
};
