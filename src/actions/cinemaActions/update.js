const Cinema = require('../../models/Cinema');
const { cinemaExists, supllierExists } = require('../../helpers/checkDataExists');

const checkName = async (id, name) => {
    const namelExists = await Cinema.findOne({
        name,
        _id: { $ne: `${id}` },
        is_deleted: { $ne: true },
    }).lean();

    if (namelExists) {
        throw new Error('Tên rạp chiếu phim đã tồn tại!');
    }

    return true;
};

module.exports = async (args) => {
    const { id, id_supplier, name, address, district, hotline, lat, lng } =
        args;

    await cinemaExists(id);
    await supllierExists(id_supplier);

    await checkName(id, name);

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

    const updateCineme = await Cinema.findByIdAndUpdate(id, query, {
        new: true,
    }).lean();

    return updateCineme;
};
