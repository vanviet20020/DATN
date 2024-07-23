const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { connection } = require('../config/connectBD');

const TransactionSchema = new Schema(
    {
        status: { type: String, enmum: ['Nạp tiền', 'Mua vé'], require: true },
        payment: { type: Number, require: true },
        old_coin: { type: Number, require: true },
        new_coin: { type: Number, require: true },
        message: { type: String },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            require: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
        },
    },
);

const Transaction = connection.model('transactions', TransactionSchema);

module.exports = Transaction;
