const Movie = require('../../models/Movie');
const { checkDataExists } = require('../../helpers/getDataExists');
module.exports = async (args) => {
    const { id_movie, status } = args;
    await checkDataExists(id_movie, 'Movie');

    const movieUpdate = await Movie.findByIdAndUpdate(id_movie, {
        status,
    }).lean();

    return {
        message: `Cập  nhật trạng thái phim ${movieUpdate.name} thành công`,
    };
};
