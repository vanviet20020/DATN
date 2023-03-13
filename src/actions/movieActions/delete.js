const Movie = require('../../models/Movie');
const { movieExists } = require('../../helpers/checkDataExists');

module.exports = async (id) => {
    return movieExists(id);

    return Movie.findByIdAndDelete(id).lean();
};
