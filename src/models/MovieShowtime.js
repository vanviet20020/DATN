const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieShowtimeSchema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    seats: { type: Number, required: true },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
        require: true
        // back_populates: "movie_showtimes",
    },
    cinema: {
        type: Schema.Types.ObjectId,
        ref: "Cinema",
        require: true
        // back_populates: "movie_showtimes",
    },
    // tickets: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Ticket",
    //     },
    // ],
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})

const MovieShowtime = mongoose.model("MovieShowtime", MovieShowtimeSchema);

module.exports = MovieShowtime;
