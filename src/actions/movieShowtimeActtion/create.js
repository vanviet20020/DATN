const { Types } = require("mongoose")

const Movie = require("../../models/Movie")
const Cinema = require("../../models/Cinema")
const MovieShowtime = require("../../models/MovieShowtime")

const checkMovie = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID phim không hợp lệ");
    }

    const movieExists = await Movie.findById(`${id}`).lean();

    if (!movieExists) {
        throw new Error("Phim không tồn tại");
    }

    return true;
};

const checkCinema = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID rạp chiếu phim không hợp lệ");
    }

    const cinemaExists = await Cinema.findById(`${id}`).lean();

    if (!cinemaExists) {
        throw new Error("Rạp chiếu phim không tồn tại");
    }

    return true;
};

module.exports = async (args) => {
    const { id_movie, id_cinema, date, time, seats } = args

    await checkMovie(id_movie)

    await checkCinema(id_cinema)

    const query = {
        id_movie, id_cinema, date, time, seats
    }

    const newMovieShowtime = await MovieShowtime.create(query)

    return newMovieShowtime
}
