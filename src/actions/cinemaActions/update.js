const { Types } = require("mongoose");

const Cinema = require("../../models/Cinema");
const Supplier = require("../../models/Supplier");

const checkCinema = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID rạp chiếu phim không hợp lệ");
    }

    const cinemaExists = await Cinema.findById(`${id}`).lean();

    if (!cinemaExists) {
        throw new Error("Rạp chiếu phim không tồn tại");
    }

    return true;
};

const checkSupplier = async (id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error("ID supplier không hợp lệ");
    }

    const supplierExists = await Supplier.findById(`${id}`).lean();

    if (!supplierExists) {
        throw new Error("Nhà cung cấp không tồn tại");
    }

    return true;
};

const checkName = async (id, name) => {
    const namelExists = await Cinema.findOne({ name, _id: { $ne: `${id}` } }).lean();

    if (namelExists) {
        throw new Error("Tên rạp chiếu phim đã tồn tại!");
    }

    return true;
};

module.exports = async (args) => {
    const {
        id,
        id_supplier,
        name,
        address,
        disctrict,
        hotline,
        lat,
        lng,
    } = args;

    await checkCinema(id);

    await checkSupplier(id_supplier);

    await checkName(id, name);

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

    const updateCineme = await Cinema.findByIdAndUpdate(id, query, { new: true }).lean();

    return updateCineme
};
