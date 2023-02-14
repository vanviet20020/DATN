const MovieActions = require("../actions/movieActions");
const { sendSuccess, sendError } = require("../helpers/sendReponse");

exports.create = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body)

    const file = req.file

    MovieActions.create(args, file)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
}