const Supplier = require('../../models/Supplier');

module.exports = async () =>
    Supplier.find({ is_deleted: { $ne: true } }).lean();
