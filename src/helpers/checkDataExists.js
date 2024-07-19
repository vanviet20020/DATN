const { Types } = require('mongoose');

const User = require('../models/User');
const Supplier = require('../models/Supplier');
const Cinema = require('../models/Cinema');
const Movie = require('../models/Movie');
const MovieShowtime = require('../models/MovieShowtime');

const dataExists = async (id, collec) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Người dùng không hợp lệ`);
    }

    let dataExists;

    switch (collec) {
        case 'User':
            dataExists = await User.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'Supplier':
            dataExists = await Supplier.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'Cinema':
            dataExists = await Cinema.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'Movie':
            dataExists = await Movie.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'MovieShowtime':
            dataExists = await MovieShowtime.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
    }

    if (!dataExists) {
        throw new Error(`Dữ liệu không tồn tại`);
    }

    return true;
};

module.exports = dataExists;
