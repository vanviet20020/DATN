const Supplier = require('../../models/Supplier');
const { getDataExists } = require('../../helpers/getDataExists');

module.exports = async (id) => {
    const suppliers = await Supplier.find({ is_deleted: { $ne: true } }).lean();
    const cinema = await getDataExists(id, 'Cinema');
    return { cinema, suppliers };
};
