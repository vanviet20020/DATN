const Supplier = require('../../models/Supplier')

module.exports = async () => {
    return Supplier.find({ is_deleted: { $ne: true } }).lean()
}