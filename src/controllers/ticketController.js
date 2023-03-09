const TicketActions = require('../actions/ticketActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.book = async (req, res, next) => {
    const user = req.user;
    const { id_movie_showtime, numberOfTickets } = req.query;

    TicketActions.book(id_movie_showtime, numberOfTickets, user)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
