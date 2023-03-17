const Supplier = require('../../models/Supplier');
const { getCinema } = require('../../helpers/getDataExists');

module.exports = async (id) => {
    const suppliers = await Supplier.find({ is_deleted: { $ne: true } }).lean();
    const cinema = await getCinema(id);
    return { cinema, suppliers };
};
