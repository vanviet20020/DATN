const User = require('../../models/User');

module.exports = async (args) => {
    const page = parseInt(args.page) || 1;
    const limit = parseInt(args.limit) || 20;

    const data = await User.find()
        .skip((page - 1) * limit)
        .limit(limit);

    const count = await User.countDocuments();

    return { data, count, page, limit };
};
