const { Types } = require("mongoose");

const MovieShowtime = require("../../models/MovieShowtime");

const checkMovieShowtime = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID Phim không hợp lệ");
    }

    const movieShowtimesExists = await Movie.findById(id).lean();

    if (!movieShowtimesExists) {
        throw new Error("Phim không tồn tại");
    }

    return true;
};

module.exports = async (id) => {
    await checkMovieShowtime(id);

    return MovieShowtime.findByIdAndDelete(id).lean();
};
