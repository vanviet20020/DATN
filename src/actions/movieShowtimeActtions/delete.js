const MovieShowtime = require('../../models/MovieShowtime');
const { mvieShowtimeExists } = require('../../helpers/checkDataExists');
module.exports = async (id) => {
    return checkDataExists(id);

    return MovieShowtime.findByIdAndDelete(id).lean();
};
