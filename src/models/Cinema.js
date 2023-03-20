const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CinemaSchema = new Schema(
    {
        name: { type: String, unique: true },
        address: { type: String, required: true },
        district: { type: String, required: true },
        hotline: String,
        location: { type: Schema.Types.Mixed, required: true },
        is_deleted: { type: Boolean, default: false },
        supplier: {
            type: Schema.Types.ObjectId,
            ref: 'Supplier',
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

const Cinema = mongoose.model('Cinema', CinemaSchema);

module.exports = Cinema;
