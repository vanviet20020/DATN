const { Types } = require('mongoose');

const Cinema = require('../../models/Cinema');
const MovieShowtime = require('../../models/MovieShowtime');

const checkCinema = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error('ID phim không hợp lệ');
    }

    const cinemaExists = await Cinema.findById(`${id}`).lean();

    if (!cinemaExists) {
        throw new Error('Phim không tồn tại');
    }

    return true;
};

module.exports = async (id) => {
    await checkCinema(id);

    return Cinema.findById(id)
        .populate({
            path: 'supplier',
        })
        .populate({
            path: 'movie_shotimes',
            model: 'MovieShowtime',
            populate: {
                path: 'movie',
            },
        });
};
