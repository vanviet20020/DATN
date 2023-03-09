const User = require('../../models/User');
const Ticket = require('../../models/Ticket');
const MovieShowtime = require('../../models/MovieShowtime');
const Transaction = require('../../models/Transaction');
const getDataExists = require('../../helpers/getDataExists');

module.exports = async (id_movie_showtime, numberOfTickets = '1', user) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    try {
        const movieShowtime = await getDataExists(
            'MovieShowtime',
            'Lịch chiếu phim',
            id_movie_showtime,
        );

        const { _id: idUser, coin } = user;
        const { _id: idMovieShowtime, ticket_price, seats } = movieShowtime;
        if (coin > ticket_price * numberOfTickets) {
            const ticket = await Ticket.create({
                user: idUser,
                movie_showtime: idMovieShowtime,
            });

            const remainingSeats = seats - numberOfTickets;

            await MovieShowtime.findByIdAndUpdate(idMovieShowtime, {
                seats: remainingSeats,
            });

            const new_coin = coin - ticket_price * numberOfTickets;

            const queryTransaction = {
                status: 'Mua vé',
                old_coin: coin,
                new_coin,
                user: idUser,
                message: `Mua ${numberOfTickets} vé`,
            };

            const transaction = await Transaction.create(queryTransaction);

            await User.updateOne(
                { _id: idUser },
                {
                    coin: new_coin,
                    $push: {
                        tickets: ticket._id,
                        transactions: transaction._id,
                    },
                },
            ).exec();
            return { message: 'Đặt vé thành công' };
        }
    } catch (err) {
        await session.abortTransaction();
        throw err;
    } finally {
        session.endSession();
    }
};
