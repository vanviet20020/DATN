const { Types } = require('mongoose');

const User = require('../models/User');
const Supplier = require('../models/Supplier');
const Cinema = require('../models/Cinema');
const Movie = require('../models/Movie');
const MovieShowtime = require('../models/MovieShowtime');

const getUser = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Người dùng không hợp lệ`);
    }

    const dataExists = await User.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Người dùng không tồn tại`);
    }

    return dataExists;
};

const getSupplier = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Nhà cung cấp không hợp lệ`);
    }

    const dataExists = await Supplier.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Nhà cung cấp không tồn tại`);
    }

    return dataExists;
};

const getCinema = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Rạp chiếu phim không hợp lệ`);
    }

    const dataExists = await Cinema.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Rạp chiếu phim không tồn tại`);
    }

    return dataExists;
};

const getMovie = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Phim không hợp lệ`);
    }

    const dataExists = await Movie.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Phim không tồn tại`);
    }

    return dataExists;
};

const getMovieShowtime = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Lịch chiếu phim không hợp lệ`);
    }

    const dataExists = await MovieShowtime.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Lịch chiếu phim không tồn tại`);
    }

    return dataExists;
};

module.exports = {
    getUser,
    getSupplier,
    getCinema,
    getMovie,
    getMovieShowtime,
};
