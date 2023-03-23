const Movie = require('../../models/Movie');
const MovieShowtime = require('../../models/MovieShowtime');

module.exports = async (name) => {
    const movie = await Movie.findOne({
        name,
        is_deleted: { $ne: true },
    }).lean();

    if (!movie) {
        throw new Error('Phim không tồn tại');
    }

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
