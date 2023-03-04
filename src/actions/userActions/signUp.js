const bcrypt = require('bcrypt');

const User = require('../../models/User');

const salt = bcrypt.genSaltSync(10);

module.exports = async (args) => {
    const { fullname, email, password, phone_number } = args;

    const emailExists = await User.findOne({ email }).lean();
    if (emailExists) {
        throw new Error('Email đã tồn tại!');
    }

    if (phone_number && phone_number.length != 10) {
        throw new Error('Số điện thoại phải là 10 số');
    }

    if (phone_number) {
        const phoneNumberExists = await User.findOne({ phone_number }).lean();
        if (phoneNumberExists) {
            throw new Error('Số điện thoại đã tồn tại!');
        }
    }

    const hashPassword = bcrypt.hashSync(password, salt);

    const query = {
        fullname,
        email,
        password: hashPassword,
        phone_number,
    };

    const newUser = await User.create(query);
    return newUser;
};
