const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, unique: true },
    coin: Number,
    is_admin: { type: Boolean, default: false },
    tickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket",
        },
    ],
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
        },
    ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;