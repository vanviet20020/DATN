const getDataExists = require('../../helpers/getDataExists');

module.exports = async (id) =>
    getDataExists('MovieShowtime', 'Lịch chiếu phim', id);
