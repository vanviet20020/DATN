const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
        // back_populates: "tickets",
    },
    movie_showtime: {
        type: Schema.Types.ObjectId,
        ref: "MovieShowtime",
        require: true
        // back_populates: "tickets",
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
