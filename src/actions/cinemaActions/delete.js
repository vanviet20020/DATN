const { Types } = require("mongoose");

const Movie = require("../../models/Movie");

const getCinema = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID rạp chiếu phim không hợp lệ");
    }

    const cinemaExists = await Movie.findById(id).lean();

    if (!cinemaExists) {
        throw new Error("Rạp chiếu phim không tồn tại");
    }

    return cinemaExists;
};

module.exports = async (id) => { getCinema(id) }
