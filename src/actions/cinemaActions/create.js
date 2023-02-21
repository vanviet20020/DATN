const { Types } = require("mongoose");

const Cinema = require("../../models/Cinema");
const Supplier = require("../../models/Supplier");

const checkSupplier = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID supplier không hợp lệ");
    }

    const supplierExists = await Supplier.findById(`${id}`).lean();

    if (!supplierExists) {
        throw new Error("Nhà cung cấp không tồn tại");
    }

    return supplierExists;
};

const checkName = async (name) => {
    const namelExists = await Cinema.findOne({ name }).lean();

    if (namelExists) {
        throw new Error("Rạp chiếu phim đã tồn tại!");
    }

    return true;
};

module.exports = async (args) => {
    const { id_supplier, name, address, disctrict, hotline, lat, lng } = args;

    const supplier = await checkSupplier(id_supplier);

    await checkName(name);

    const location = {
        type: "Point",
        coordinates: [lat, lng],
    };

    const query = {
        supplier: id_supplier,
        name,
        address,
        disctrict,
        hotline,
        location,
    };

    const newCinema = await Cinema.create(query);

    // await Supplier.findByIdAndUpdate(id_supplier, { cinemas: { $push: newCinema._id } })

    return newCinema
};
