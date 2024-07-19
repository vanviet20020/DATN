const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { connection } = require('../config/connectBD');

const TicketSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },
        movie_showtime: {
            type: Schema.Types.ObjectId,
            ref: 'MovieShowtime',
            require: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

const Ticket = connection.model('tickets', TicketSchema);

module.exports = Ticket;
