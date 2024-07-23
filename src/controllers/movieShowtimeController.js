const MovieShowtimeActtions = require('../actions/movieShowtimeActtions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.createForm = async (req, res, next) => {
    MovieShowtimeActtions.createForm().then(({ cinemas, movies }) => {
        res.render('MovieShowtime/create', {
            title: 'Tạo lịch chiếu phim mới',
            cinemas,
            movies,
            layout: 'dashboard',
        });
    });
};

exports.create = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieShowtimeActtions.create(args)
        .then((data) => res.redirect('/movie-showtimes/management'))
        .catch(sendError(req, res));
};

exports.management = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    MovieShowtimeActtions.search(agrs)
        .then((movieShowtimes) => {
            res.render('MovieShowtime/management', {
                title: 'Quản lý lịch chiếu phim',
                movieShowtimes,
                layout: 'dashboard',
            });
        })
        .catch(sendError(req, res));
};

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
