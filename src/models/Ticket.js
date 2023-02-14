const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        back_populates: "tickets",
    },
    movie_showtime: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MovieShowtime",
        back_populates: "tickets",
    },
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
