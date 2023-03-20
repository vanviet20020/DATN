const { Types } = require('mongoose');
const MovieShowtime = require('../../models/MovieShowtime');

module.exports = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Lịch chiếu phim không hợp lệ`);
    }

    return MovieShowtime.findByIdAndUpdate(
        id,
        { $set: { is_deleted: true } },
        { new: true },
    ).lean();
};
