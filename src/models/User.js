const mongoose = require('mongoose');
// const { token } = require('morgan');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema(
    {
        fullname: { type: String },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        phone_number: { type: Number, unique: true, length: 10 },
        token: { type: String },
        coin: { type: Number, default: 0 },
        is_admin: { type: Boolean, default: false },
        is_deleted: { type: Boolean, default: false },
        tickets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Ticket',
            },
        ],
        transactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Transaction',
            },
        ],
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    },
);

// UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;
