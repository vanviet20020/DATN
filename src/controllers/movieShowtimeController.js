const MovieShowtimeActtion = require('../actions/movieShowtimeActtion');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.create = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);
    console.log(args);

    MovieShowtimeActtion.create(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.search = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    CinemaActions.search(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    MovieShowtimeActtion.getById(id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.update = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieShowtimeActtion.update(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.delete = async (req, res, next) => {
    MovieShowtimeActtion.delete(req.params.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
