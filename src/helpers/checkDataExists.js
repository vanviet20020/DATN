const { Types } = require('mongoose');

const User = require('../models/User');
const Supplier = require('../models/Supplier');
const Cinema = require('../models/Cinema');
const Movie = require('../models/Movie');
const MovieShowtime = require('../models/MovieShowtime');

module.exports = async (modelName, modelNameV, id) => {
    if (!Types.ObjectId.isValid(`${id}`)) {
        throw new Error(`ID ${modelNameV} không hợp lệ`);
    }

    let Model;
    switch (modelName) {
        case 'User':
            return (Model = User);
        case 'Supplier':
            return (Model = Supplier);
        case 'Cinema':
            return (Model = Cinema);
        case 'Movie':
            return (Model = Movie);
        case 'MovieShowtime':
            return (Model = MovieShowtime);
    }
    console.log(Model);

    const dataExists = await Model.finOne({
        _id: `${id}`,
        is_deleted: { $ne: true },
    }).lean();

    if (!dataExists) {
        throw new Error(`${modelNameV} không tồn tại`);
    }

    return true;
};
