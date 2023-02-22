const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        // back_populates: "tickets",
    },
    movie_showtime: {
        type: Schema.Types.ObjectId,
        ref: "MovieShowtime",
        // back_populates: "tickets",
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
