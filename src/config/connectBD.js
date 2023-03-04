const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/web_app', {
            useNewUrlParser: true,
        });
        console.log('Connect database Successfully !!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
