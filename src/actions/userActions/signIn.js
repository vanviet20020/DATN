const bcrypt = require('bcrypt');
const { signAccessToken, signRefreshToken } = require('../../helpers/JWT');

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
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phone_number,
        coin: user.coin,
        roles: user.roles,
    };

    const accessToken = await signAccessToken(data);
    const refreshToken = await signRefreshToken(data);

    if (accessToken && refreshToken) {
        return {
            token: accessToken,
            refreshToken,
            message: 'Đăng nhập thành công',
        };
    } else {
        return { message: 'Đăng nhập không thành công' };
    }
};
