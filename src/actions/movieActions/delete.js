const { Types } = require("mongoose");

const Movie = require("../../models/Movie");

const checkMovie = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID Phim không hợp lệ");
    }

    const movieExists = await Movie.findById(id).lean();

    if (!movieExists) {
        throw new Error("Phim không tồn tại");
    }

    return true;
};

module.exports = async (id) => {
    await checkMovie(id);

    return Movie.findByIdAndDelete(id).lean();
};
