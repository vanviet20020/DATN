const Movie = require('../../models/Movie');
const checkDataExists = require('../../helpers/checkDataExists');

module.exports = async (id) => {
    await checkDataExists('Movie', 'Phim', id);

    return Movie.findByIdAndDelete(id).lean();
};
