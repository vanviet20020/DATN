const MovieShowtimeActtions = require('../actions/movieShowtimeActtions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.create = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieShowtimeActtions.create(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

// exports.search = async (req, res, next) => {
//     const agrs = Object.assign({}, req.params, req.body);

//     CinemaActions.search(agrs)
//         .then(sendSuccess(req, res))
//         .catch(sendError(req, res));
// };

exports.getById = async (req, res, next) => {
    MovieShowtimeActtions.getById(req.params.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.update = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieShowtimeActtions.update(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.delete = async (req, res, next) => {
    MovieShowtimeActtions.delete(req.params.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
