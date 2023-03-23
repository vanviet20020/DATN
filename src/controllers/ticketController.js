const TicketActions = require('../actions/ticketActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.book = async (req, res, next) => {
    const user = req.user;
    const args = Object.assign({}, req.params, req.body);

    TicketActions.book(args, user)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
