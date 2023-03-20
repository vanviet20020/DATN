const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema(
    {
        name: { type: String, required: true },
        ticket_price: { type: Number, required: true },
        image_ticket_price: { type: String, required: true },
        is_deleted: { type: Boolean, default: false },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

const Supplier = mongoose.model('Supplier', SupplierSchema);

module.exports = Supplier;
