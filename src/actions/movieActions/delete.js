const { Types } = require('mongoose');
const Movie = require('../../models/Movie');

module.exports = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Phim không hợp lệ`);
    }

    return Movie.findByIdAndUpdate(
        id,
        { $set: { is_deleted: true } },
        { new: true },
    ).lean();
};
