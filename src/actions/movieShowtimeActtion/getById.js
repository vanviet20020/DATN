const { Types } = require('mongoose');

const MovieShowtime = require('../../models/MovieShowtime');

const getMovieShowtime = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error('ID phim không hợp lệ');
    }

    const movieShowtimeExists = await MovieShowtime.findById(`${id}`).lean();

    if (!movieShowtimeExists) {
        throw new Error('Phim không tồn tại');
    }

    return true;
};

module.exports = async (id) => {
    getMovieShowtime(id);
};
