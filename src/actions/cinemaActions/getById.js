const Supplier = require('../../models/Supplier');
const getData = require('../../helpers/getDataExists');

module.exports = async (id) => {
    const suppliers = await Supplier.find({ is_deleted: { $ne: true } }).lean();
    const cinema = await getData(id, 'Cinema');
    return { cinema, suppliers };
};
