const CinemaActions = require('../actions/cinemaActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.createForm = async (req, res, next) => {
    CinemaActions.createForm()
        .then((suppliers) => {
            res.render('Cinema/create', {
                title: 'Tạo rạp chiếu phim mới',
                suppliers,
            });
        })
        .catch(res.sendError(req, res));
};
exports.create = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    CinemaActions.create(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.search = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body, req.query);

    CinemaActions.search(agrs)
        .then(({ cinemas, suppliers }) => {
            res.render('Cinema/search', {
                title: 'Tất cả các rạp',
                cinemas,
                suppliers,
            });
        })
        .catch((err) => {
            res.redirect('/cinemas/search');
        });
};

exports.getDetail = async (req, res, next) => {
    CinemaActions.getDetail(req.query.id)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getById = async (req, res, next) => {
    CinemaActions.getById(req.params.id)
        .then(({ cinema, suppliers }) => {
            res.render('Cinema/update', {
                title: `Cập nhật rạp chiếu ${cinema.name}`,
                cinema,
                suppliers,
            });
        })
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
