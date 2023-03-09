const MovieActions = require('../actions/movieActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.create = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    const file = req.file;

    MovieActions.create(args, file)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.search = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieActions.search(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getDetail = async (req, res, next) => {
    MovieActions.getDetail(req.query.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getById = async (req, res, next) => {
    MovieActions.getById(req.params.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.update = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);
    const file = req.file;

    MovieActions.update(args, file)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.delete = async (req, res, next) => {
    MovieActions.delete(req.params.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
