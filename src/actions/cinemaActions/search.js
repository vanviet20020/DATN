const Cinema = require('../../models/Cinema');
const Supplier = require('../../models/Supplier');
const checkDataExists = require('../../helpers/checkDataExists');

const validateQuery = (args) => {
    const { name, district, supplier } = args;

    const query = { is_deleted: { $ne: true } };

    if (name && name.length) {
        Object.assign(query, { name });
    }

    if (district && district.length) {
        Object.assign(query, { district });
    }

    if (supplier && supplier.length) {
        Object.assign(query, { supplier });
    }

    return query;
};

module.exports = async (args) => {
    const id_supplier = args.id_supplier;

    if (id_supplier && id_supplier.length) {
        await checkDataExists(id_supplier, 'Supplier');
    }

    const query = validateQuery(args);

    const suppliers = await Supplier.find().lean();

    const cinemas = await Cinema.find(query).sort({ updated_at: -1 }).lean();

    return { cinemas, suppliers };
};
