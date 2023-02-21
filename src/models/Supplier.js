const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: { type: String, required: true },
    ticket_price: { type: Number, required: true },
    image_ticket_price: { type: String, required: true },
    cinemas: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cinema",
        },
    ],
});

const Supplier = mongoose.model("Supplier", SupplierSchema);

module.exports = Supplier;
