const Movie = require('../../models/Movie');
const dataExists = require('../../helpers/checkDataExists');

const checkName = async (id, name) => {
    const namelExists = await Movie.findOne({
        name,
        _id: { $ne: `${id}` },
        is_deleted: { $ne: true },
    }).lean();

    if (namelExists) {
        throw new Error('Phim đã tồn tại!');
    }

    return true;
};

module.exports = async (args, file) => {
    const {
        id,
        name,
        trailer_link,
        description,
        director,
        cast,
        release_date,
        runtime,
        language,
        genre,
    } = args;

    await dataExists(id, 'Movie');

    await checkName(id, name);

    const query = {
        name,
        image: `img/uploads/${file.filename}`,
        trailer_link,
        description,
        director,
        cast,
        release_date,
        runtime,
        language,
        genre,
    };

    const updateMovie = await Movie.findByIdAndUpdate(id, query, {
        new: true,
    }).lean();

    return updateMovie;
};
