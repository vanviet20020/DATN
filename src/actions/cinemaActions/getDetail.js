const Cinema = require('../../models/Cinema');
const MovieShowtime = require('../../models/MovieShowtime');
const { cinemaExists } = require('../../helpers/checkDataExists');

module.exports = async (id) => {
    await cinemaExists(id);

    const cinema = await Cinema.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    })
        .populate({
            path: 'supplier',
            model: 'Supplier',
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
