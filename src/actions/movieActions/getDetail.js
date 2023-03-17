const Movie = require('../../models/Movie');
const MovieShowtime = require('../../models/MovieShowtime');

const { movieExists } = require('../../helpers/checkDataExists');

module.exports = async (id) => {
    await movieExists(id);

    const movie = await Movie.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    const movieShowtimes = await MovieShowtime.find({
        movie: movie._id,
    })
        .populate({
            path: 'cinema',
            populate: {
                path: 'supplier',
            },
        })
        .sort({ date: -1 })
        .lean();
    return { movie, movieShowtimes };
};
