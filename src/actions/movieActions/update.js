const { Types } = require("mongoose");

const Movie = require("../../models/Movie");

const checkMovie = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID phim không hợp lệ");
    }

    const movieExists = await Movie.findById(`${id}`).lean();

    if (!movieExists) {
        throw new Error("Phim không tồn tại");
    }

    return true;
};

const checkName = async (id, name) => {
    const namelExists = await Movie.findOne({ name, _id: { $ne: `${id}` } }).lean();

    if (namelExists) {
        throw new Error("Bộ phim đã tồn tại!");
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

    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID supplier không hợp lệ");
    }

    await checkMovie(id)

    await checkName(id, name);

    const newMovie = {
        name,
        image: "img/uploads/" + file.filename,
        trailer_link,
        description,
        director,
        cast,
        release_date,
        runtime,
        language,
        genre,
    };

    return Movie.findByIdAndUpdate(id, newMovie, { new: true }).lean();
};
