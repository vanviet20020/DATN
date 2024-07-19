const Movie = require('../../models/Movie');
const dataExists = require('../../helpers/checkDataExists');
module.exports = async (args) => {
    const { id_movie, status } = args;
    await dataExists(id_movie, 'Movie');

    const movieUpdate = await Movie.findByIdAndUpdate(id_movie, {
        status,
    }).lean();

    return {
        message: `Cập  nhật trạng thái phim ${movieUpdate.name} thành công`,
    };
};
