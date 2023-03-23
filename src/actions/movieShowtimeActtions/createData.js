const Cinema = require('../../models/Cinema');
const Movie = require('../../models/Movie');

module.exports = async () => {
    const cinemas = await Cinema.find({ is_deleted: { $ne: true } }).lean();
    const movies = await Movie.find({ is_deleted: { $ne: true } }).lean();
    return { cinemas, movies };
};
