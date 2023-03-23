const Cinema = require('../../models/Cinema');
const MovieShowtime = require('../../models/MovieShowtime');

module.exports = async (name) => {
    const cinema = await Cinema.findOne({ name, is_deleted: { $ne: true } })
        .populate({
            path: 'supplier',
        })
        .lean();

    const movieShowtimes = await MovieShowtime.find({
        cinema: cinema._id,
    })
        .populate({
            path: 'movie',
        })
        .sort({ date: -1 })
        .lean();
    return { cinema, movieShowtimes };
};
