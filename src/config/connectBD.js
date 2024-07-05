const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
        });
        console.log('Connect database Successfully !!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
