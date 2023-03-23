const Movie = require('../../models/Movie');

module.exports = async (args) => {
    const { data } = args;

    const query = { is_deleted: { $ne: true } };

    if (data) {
        Object.assign(query, {
            $or: [
                { name: { $regex: data } },
                { director: { $regex: data } },
                { cast: { $regex: data } },
            ],
        });
    }

    const movies = await Movie.find(query).sort({ updated_at: -1 }).lean();

    return movies;
};
