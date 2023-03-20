const OtherActions = require('../actions/otherActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.home = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    OtherActions.home(args)
        .then((data) => {
            res.render('home', { title: 'Rạp chiếu phim', data });
        })
        .catch((err) =>
            res.status(503).send('503 Service Temporarily Unavailable'),
        );
};

exports.management = async (req, res, next) => {
    OtherActions.management()
        .then(({ user, ticket, sumCoin, transactions }) => {
            res.render('Admin/management', {
                title: 'Trang quản lý',
                user,
                ticket,
                sumCoin,
                transactions,
            });
        })
        .catch((err) =>
            res.status(503).send('503 Service Temporarily Unavailable'),
        );
};
