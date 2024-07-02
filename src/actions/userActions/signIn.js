const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../../models/User');

const secret_key = process.env.SECRET_KEY || 'Viet';

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
        role: user.is_admin,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };

    const token = jwt.sign(data, secret_key);

    if (token) {
        return {
            token,
            message: 'Đăng nhập thành công',
        };
    } else {
        return { message: 'Đăng nhập không thành công' };
    }
};
