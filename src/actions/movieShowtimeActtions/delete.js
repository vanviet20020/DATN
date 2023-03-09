const MovieShowtime = require('../../models/MovieShowtime');
const checkDataExists = require('../../helpers/checkDataExists');
module.exports = async (id) => {
    await checkDataExists('MovieShowtime', 'Lịch chiếu phim', id);

    return MovieShowtime.findByIdAndDelete(id).lean();
};
