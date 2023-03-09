const getCinema = require('../../helpers/getDataExists');

module.exports = async (id) => {
    return getCinema('Cinema', 'Rạp chiếu phim', id);
};
