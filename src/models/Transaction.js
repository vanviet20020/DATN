const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    status: { type: String, enmum: ["Nạp tiền", "Mua vé"], require: true },
    old_coin: Number,
    new_coin: Number,
    date: { type: Date, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        back_populates: "transactions",
    },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;