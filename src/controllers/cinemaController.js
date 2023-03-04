const CinemaActions = require('../actions/cinemaActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.create = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    CinemaActions.create(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.search = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    CinemaActions.search(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getDetail = async (req, res, next) => {
    const { id } = req.params;

    CinemaActions.getDetail(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getById = async (req, res, next) => {
    const { id } = req.params;

    CinemaActions.getById(id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.update = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    CinemaActions.update(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.delete = async (req, res, next) => {
    CinemaActions.delete(req.params.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
