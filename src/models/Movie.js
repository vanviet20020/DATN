const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        trailer_link: { type: String, required: true },
        description: String,
        director: String,
        cast: String,
        release_date: { type: String, required: true },
        runtime: { type: String, required: true },
        language: String,
        genre: String,
        status: { type: Boolean, default: true },
        // movie_showtimes: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "MovieShowtime",
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

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
