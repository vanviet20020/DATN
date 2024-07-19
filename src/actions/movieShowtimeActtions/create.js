const { Types } = require('mongoose');

const Cinema = require('../../models/Cinema');
const MovieShowtime = require('../../models/MovieShowtime');
const dataExists = require('../../helpers/checkDataExists');

const checkCinemaAndGetTicketPrice = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error('ID Lịch chiếu phim không hợp lệ');
    }

    const cinemaExists = await Cinema.findOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    })
        .populate({
            path: 'supplier',
            match: { is_deleted: { $ne: true } },
            select: 'ticket_price -_id',
        })
        .lean();

    if (!cinemaExists) {
        throw new Error('Lịch chiếu phim không tồn tại');
    }

    return cinemaExists.supplier.ticket_price;
};

module.exports = async (args) => {
    const { id_movie, id_cinema, date, start_time, seats } = args;

    await dataExists(id_movie, 'Movie');
    await dataExists(id_cinema, 'Cinema');

    const ticket_price = await checkCinemaAndGetTicketPrice(id_cinema);

    const query = {
        movie: id_movie,
        cinema: id_cinema,
        date,
        start_time,
        seats,
        ticket_price,
    };

    const newMovieShowtime = await MovieShowtime.create(query);

    return newMovieShowtime;
};
