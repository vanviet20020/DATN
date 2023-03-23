const MovieShowtime = require('../../models/MovieShowtime');

module.exports = async () => {
    return MovieShowtime.find()
        .populate({ path: 'movie' })
        .populate({ path: 'cinema' })
        .lean();
};
