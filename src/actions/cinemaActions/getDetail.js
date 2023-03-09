const Cinema = require('../../models/Cinema');
const MovieShowtime = require('../../models/MovieShowtime');
const checkDataExists = require('../../helpers/checkDataExists');

module.exports = async (id) => {
    await checkDataExists('Cinema', 'Rạp chiếu phim', id);

    const cinema = await Cinema.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).populate({
        path: 'supplier',
        model: 'Supplier',
    });

    const movieShowtimes = await MovieShowtime.find({
        cinema: cinema._id,
    })
        .populate({
            path: 'movie',
        })
        .sort({ date: -1 });
    return { cinema, movieShowtimes };
};
