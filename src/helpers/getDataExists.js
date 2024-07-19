const { Types } = require('mongoose');

const User = require('../models/User');
const Supplier = require('../models/Supplier');
const Cinema = require('../models/Cinema');
const Movie = require('../models/Movie');
const MovieShowtime = require('../models/MovieShowtime');

const getData = async (id, collec) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Người dùng không hợp lệ`);
    }

    let data;

    switch (collec) {
        case 'User':
            data = await User.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'Supplier':
            data = await Supplier.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'Cinema':
            data = await Cinema.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'Movie':
            data = await Movie.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
        case 'MovieShowtime':
            data = await MovieShowtime.findOne({
                _id: `${id}`,
                is_deleted: { $ne: true },
            }).lean();
    }

    if (!data) {
        throw new Error(`Người dùng không tồn tại`);
    }

    return data;
};

module.exports = getData;
