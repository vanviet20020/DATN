const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
    {
        status: { type: String, enmum: ['Nạp tiền', 'Mua vé'], require: true },
        old_coin: { type: Number, require: true },
        new_coin: { type: Number, require: true },
        message: String,
        date: { type: Date, default: Date.now },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
        },
    },
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
