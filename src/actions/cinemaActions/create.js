const Cinema = require('../../models/Cinema');
const dataExists = require('../../helpers/checkDataExists');

const checkName = async (name) => {
    const namelExists = await Cinema.findOne({
        name,
        is_deleted: { $ne: true },
    }).lean();

    if (namelExists) {
        throw new Error('Rạp chiếu phim đã tồn tại!');
    }

    return true;
};

module.exports = async (args) => {
    const { supplier, name, address, district, hotline, lat, lng } = args;

    await dataExists(supplier, 'Suplier');
    await checkName(name);

    const location = {
        type: 'Point',
        coordinates: [lng, lat],
    };

    const query = {
        supplier: supplier,
        name,
        address,
        district,
        hotline,
        location,
    };

    const newCinema = await Cinema.create(query);

    return newCinema;
};
