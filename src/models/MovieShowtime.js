const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieShowtimeSchema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    seats: { type: Number, required: true },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        // back_populates: "movie_showtimes",
    },
    cinema: {
        type: Schema.Types.ObjectId,
        ref: "Cinema",
        // back_populates: "movie_showtimes",
    },
    tickets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Ticket",
        },
    ],
});

const MovieShowtime = mongoose.model("MovieShowtime", MovieShowtimeSchema);

module.exports = MovieShowtime;
