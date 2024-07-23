const MovieShowtime = require('../../models/MovieShowtime');
const { checkDataExists } = require('../../helpers/getDataExists');

module.exports = async (args) => {
    const { id, id_movie, id_cinema, date, time, seats } = args;

    await checkDataExists(id, 'MovieShowtime');
    await checkDataExists(id_movie, 'Movie');
    await checkDataExists(id_cinema, 'Cinema');

    const query = { id_movie, id_cinema, date, time, seats };

    const updateMovieShowtime = await MovieShowtime.findByIdAndUpdate(
        id,
        query,
        { new: true },
    ).lean();

    return updateMovieShowtime;
};
