const CinemaActions = require("../actions/cinemaActions");
const { sendSuccess, sendError } = require("../helpers/sendReponse");

exports.create = async (req, res, next) => {
    const agrs = Object.assign({}, req.body, req.params);

    CinemaActions.create(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.update = async (req, res, next) => {
    const agrs = Object.assign({}, req.body, req.params);

    CinemaActions.update(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.delete = async (req, res, next) => {
    const agrs = Object.assign({}, req.body, req.params);

    CinemaActions.delete(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
