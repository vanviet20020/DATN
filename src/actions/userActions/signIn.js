const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/User');

const checkPassword = async (user, password) => {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
        return true;
    }

    throw new Error('Mật khẩu không chính xác!');
};

module.exports = async (args) => {
    const { email, password } = args;

    const user = await User.findOne({
        email,
        is_deleted: { $ne: true },
    }).lean();

    if (!user || user.length == 0) {
        throw new Error('Email không chính xác!');
    }

    await checkPassword(user, password);

    const data = {
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phone_number,
        coin: user.coin,
        role: user.is_admin,
    };

    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m',
    });

    const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '3d',
    });

    if (accessToken && refreshToken) {
        return {
            accessToken,
            refreshToken,
            message: 'Đăng nhập thành công',
        };
    } else {
        return { message: 'Đăng nhập không thành công' };
    }
};
