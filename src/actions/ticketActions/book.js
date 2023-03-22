const mongoose = require('mongoose');

const User = require('../../models/User');
const Ticket = require('../../models/Ticket');
const MovieShowtime = require('../../models/MovieShowtime');
const Transaction = require('../../models/Transaction');
const { getMovieShowtime } = require('../../helpers/getDataExists');

module.exports = async (id_movie_showtime, numberOfTickets = '1', user) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    try {
        const movieShowtime = await getMovieShowtime(id_movie_showtime);

        const { _id: idUser, coin } = user;
        const { _id: idMovieShowtime, ticket_price, seats } = movieShowtime;
        if (coin > ticket_price * numberOfTickets && numberOfTickets > seats) {
            // Tạo vé xem phim
            const ticket = await Ticket.create({
                user: idUser,
                movie_showtime: idMovieShowtime,
            });

            //Tính số ghế còn lại và update vào lịch chiếu
            const remainingSeats = seats - numberOfTickets;

            await MovieShowtime.findByIdAndUpdate(idMovieShowtime, {
                seats: remainingSeats,
            });

            //Tính hóa đơn cho người dùng và lượng xu còn lại
            const payment = ticket_price * numberOfTickets;

            const new_coin = coin - payment;

            //Tạo lịch sử giao dịch của người dùng
            const queryTransaction = {
                status: 'Mua vé',
                payment,
                old_coin: coin,
                new_coin,
                user: idUser,
                message: `Mua ${numberOfTickets} vé`,
            };

            const transaction = await Transaction.create(queryTransaction);

            // Cập nhật thông tin cho người dùng
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
        } else {
            throw new Error('Số xu hoặc số ghế còn lại không đủ');
        }
    } catch (err) {
        await session.abortTransaction();
        throw err;
    } finally {
        session.endSession();
    }
};
