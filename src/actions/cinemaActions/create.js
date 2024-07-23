const Cinema = require('../../models/Cinema');
const { checkDataExists } = require('../../helpers/getDataExists');

const checkName = async (name) => {
    const nameExists = await Cinema.findOne({
        name,
        is_deleted: { $ne: true },
    }).lean();

    if (nameExists) {
        throw new Error('Rạp chiếu phim đã tồn tại!');
    }

    return true;
};

module.exports = async (args) => {
    const { supplier, name, address, district, hotline, lat, lng } = args;

    await checkDataExists(supplier, 'Suplier');
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
