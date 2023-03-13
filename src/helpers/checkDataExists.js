const { Types } = require('mongoose');

const User = require('../models/User');
const Supplier = require('../models/Supplier');
const Cinema = require('../models/Cinema');
const Movie = require('../models/Movie');
const MovieShowtime = require('../models/MovieShowtime');

const userExists = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Người dùng không hợp lệ`);
    }

    const dataExists = await User.finOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Người dùng không tồn tại`);
    }

    return true;
}

const supllierExists = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Nhà cung cấp không hợp lệ`);
    }

    const dataExists = await Supplier.finOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Nhà cung cấp không tồn tại`);
    }

    return true;
}

const cinemaExists = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Rạp chiếu phim không hợp lệ`);
    }

    const dataExists = await Cinema.finOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Rạp chiếu phim không tồn tại`);
    }

    return true;
}

const movieExists = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Phim không hợp lệ`);
    }

    const dataExists = await Movie.finOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Phim không tồn tại`);
    }

    return true;
}

const mvieShowtimeExists = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID Rạp chiếu phim không hợp lệ`);
    }

    const dataExists = await MovieShowtime.finOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`Rạp chiếu phim không tồn tại`);
    }

    return true;
}

module.exports = { userExists, supllierExists, cinemaExists, movieExists, mvieShowtimeExists }