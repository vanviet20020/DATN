const { Types } = require('mongoose');
const Cinema = require('../../models/Cinema');

module.exports = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Rạp chiếu phim không hợp lệ`);
    }

    return Cinema.findByIdAndUpdate(
        id,
        { $set: { is_deleted: true } },
        { new: true },
    ).lean();
};
