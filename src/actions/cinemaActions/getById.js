const Supplier = require('../../models/Supplier');
const getCinema = require('../../helpers/getDataExists');

module.exports = async (id) => {
    const suppliers = Supplier.find({ is_deleted: { $ne: true } }).lean();
    const cinema = getCinema('Cinema', 'Rạp chiếu phim', id);
    return { cinema, suppliers };
};
