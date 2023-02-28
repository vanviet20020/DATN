const { Types } = require("mongoose");

const Movie = require("../../models/Movie")

const getMovie = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID phim không hợp lệ");
    }

    const movieExists = await Movie.findById(`${id}`).lean();

    if (!movieExists) {
        throw new Error("Phim không tồn tại");
    }

    return movieExists;
};

module.exports = async (id) => { getMovie(id) }