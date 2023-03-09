const MovieShowtime = require('../../models/MovieShowtime');
const checkDataExists = require('../../helpers/checkDataExists');

module.exports = async (args) => {
    const { id, id_movie, id_cinema, date, time, seats } = args;

    await checkDataExists('MovieShowtime', 'Lịch chiếu phim', id);
    await checkDataExists('Movie', 'Phim', id_movie);
    await checkDataExists('Cinema', 'Rạp chiếu phim', id_cinema);

    const query = { id_movie, id_cinema, date, time, seats };

    const updateMovieShowtime = await MovieShowtime.findByIdAndUpdate(
        id,
        query,
        { new: true },
    ).lean();

    return updateMovieShowtime;
};
