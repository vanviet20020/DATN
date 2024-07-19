const MovieShowtime = require('../../models/MovieShowtime');
const dataExists = require('../../helpers/checkDataExists');

module.exports = async (args) => {
    const { id, id_movie, id_cinema, date, time, seats } = args;

    await dataExists(id, 'MovieShowtime');
    await dataExists(id_movie, 'Movie');
    await dataExists(id_cinema, 'Cinema');

    const query = { id_movie, id_cinema, date, time, seats };

    const updateMovieShowtime = await MovieShowtime.findByIdAndUpdate(
        id,
        query,
        { new: true },
    ).lean();

    return updateMovieShowtime;
};
