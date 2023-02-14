const { Types } = require("mongoose");

const Cinema = require("../../models/Cinema");

const checkCinema = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID rạp chiếu phim không hợp lệ");
    }

    const cinemaExists = await Cinema.findById(id).lean();

    if (!cinemaExists) {
        throw new Error("Rạp chiếu phim không tồn tại");
    }

    return true;
};

module.exports = async (id) => {
    await checkCinema(id);

    return Cinema.findByIdAndDelete(id);
};