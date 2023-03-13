const Cinema = require('../../models/Cinema');
const { supllierExists } = require('../../helpers/checkDataExists');

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
    const { id_supplier, name, address, district, hotline, lat, lng } = args;

    await supllierExists(id_supplier);
    await checkName(name);

    const location = {
        type: 'Point',
        coordinates: [lat, lng],
    };

    const query = {
        supplier: id_supplier,
        name,
        address,
        district,
        hotline,
        location,
    };

    const newCinema = await Cinema.create(query);

    return newCinema;
};
