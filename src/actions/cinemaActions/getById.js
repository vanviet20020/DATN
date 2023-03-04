const { Types, get } = require('mongoose');

const Cinema = require('../../models/Cinema');

const getCinema = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error('ID phim không hợp lệ');
    }

    const cinemaExists = await Cinema.findById(`${id}`).lean();

    if (!cinemaExists) {
        throw new Error('Phim không tồn tại');
    }

    return cinemaExists;
};

module.exports = async (id) => {
    getCinema(id);
};
