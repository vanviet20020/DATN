const Movie = require('../../models/Movie');

module.exports = async (args) => {
    const { data } = args;

    let query;

    if (data) {
        query = {
            $or: [
                { name: { $regex: data } },
                { director: { $regex: data } },
                { cast: { $regex: data } },
            ],
        };
    } else {
        query = {};
    }

    const movies = await Movie.find(query).lean();

    return movies;
};
