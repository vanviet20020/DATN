const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieShowtimeSchema = new Schema(
    {
        date: { type: Date, required: true },
        start_time: { type: String, required: true },
        seats: { type: Number, required: true },
        ticket_price: { type: Number, required: true },
        movie: {
            type: Schema.Types.ObjectId,
            ref: 'Movie',
            require: true,
        },
        cinema: {
            type: Schema.Types.ObjectId,
            ref: 'Cinema',
            require: true,
        },
        // tickets: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "Ticket",
        //     },
        // ],
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

const MovieShowtime = mongoose.model('MovieShowtime', MovieShowtimeSchema);

module.exports = MovieShowtime;
