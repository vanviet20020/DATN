const MovieActions = require('../actions/movieActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.createForm = async (req, res, next) => {
    return res.render('Movie/create', {
        title: 'Tạo phim mới',
        layout: 'dashboard',
    });
};

exports.create = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    const file = req.file;
    MovieActions.create(args, file)
        .then(() => res.redirect('/movies/management'))
        .catch(sendError(req, res));
};

exports.management = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieActions.search(args)
        .then((movies) =>
            res.render('Movie/management', {
                title: 'Quản lý phim',
                movies,
                layout: 'dashboard',
            }),
        )
        .catch(sendError(req, res));
};

exports.search = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieActions.search(args)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getDetail = async (req, res, next) => {
    MovieActions.getDetail(req.params.name)
        .then(({ movie, movieShowtimes }) => {
            res.render('Movie/detail', {
                title: movie.name,
                movie,
                movieShowtimes,
            });
        })
        .catch(sendError(req, res));
};

exports.getById = async (req, res, next) => {
    MovieActions.getById(req.params.id)
        .then((movie) => {
            res.render('Movie/update', {
                title: `Cập nhật phim ${movie.name}`,
                movie,
                layout: 'dashboard',
            });
        })
        .catch(sendError(req, res));
};

exports.update = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);
    const file = req.file;

    MovieActions.update(args, file)
        .then(() => res.redirect('/movies/management'))
        .catch(sendError(req, res));
};

exports.updateStatus = async (req, res, next) => {
    const args = Object.assign({}, req.params, req.body);

    MovieActions.updateStatus(args)
        .then(() => res.redirect('/movies/management'))
        .catch(sendError(req, res));
};

exports.delete = async (req, res, next) => {
    MovieActions.delete(req.params.id)
        .then(() => res.redirect('/movies/management'))
        .catch(sendError(req, res));
};
