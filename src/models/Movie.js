const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { connection } = require('../config/connectBD');

const MovieSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        trailer_link: { type: String, required: true },
        description: { type: String },
        director: { type: String },
        cast: { type: String },
        release_date: { type: String, required: true },
        runtime: { type: String, required: true },
        language: { type: String },
        genre: { type: String },
        // recommend: { type: String },
        status: { type: Boolean, default: true },
        is_deleted: { type: Boolean, default: false },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

const Movie = connection.model('movies', MovieSchema);

module.exports = Movie;
