const Movie = require('../../models/Movie');

const checkName = async (name) => {
    const namelExists = await Movie.findOne({ name }).lean();

    if (namelExists) {
        throw new Error('Bộ phim đã tồn tại!');
    }

    return true;
};

module.exports = async (args, file) => {
    const {
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

    await checkName(name);

    const query = {
        name,
        image: `img/uploads ${file.filename}`,
        trailer_link,
        description,
        director,
        cast,
        release_date,
        runtime,
        language,
        genre,
    };

    const newMovie = await Movie.create(query);

    return newMovie;
};
