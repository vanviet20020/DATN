const MovieShowtime = require('../../models/MovieShowtime');
const {
    movieExists,
    cinemaExists,
    mvieShowtimeExists,
} = require('../../helpers/checkDataExists');

module.exports = async (args) => {
    const { id, id_movie, id_cinema, date, time, seats } = args;

    await mvieShowtimeExists(id);
    await movieExists(id_movie);
    await cinemaExists(id_cinema);

    const query = { id_movie, id_cinema, date, time, seats };

    const updateMovieShowtime = await MovieShowtime.findByIdAndUpdate(
        id,
        query,
        { new: true },
    ).lean();

    return updateMovieShowtime;
};
