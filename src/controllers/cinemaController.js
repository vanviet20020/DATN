const CinemaActions = require('../actions/cinemaActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.createForm = async (req, res, next) => {
    CinemaActions.createForm().then((suppliers) => {
        res.render('Cinema/create', {
            title: 'Tạo rạp chiếu phim mới',
            suppliers,
        });
    });
};

exports.create = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    CinemaActions.create(agrs)
        .then((data) => {
            res.send('Cinema/management', {
                title: 'Quản lý rạp chiếu phim',
                message: `Tạo mới rạp chiếu phim ${data.name} thành công`,
            });
        })
        .catch(sendError(req, res));
};

exports.management = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body, req.query);

    CinemaActions.search(agrs)
        .then(({ cinemas, suppliers }) => {
            res.render('Cinema/management', {
                title: 'Quản lý rạp chiếu phim',
                cinemas,
                suppliers,
            });
        })
        .catch((err) => {
            res.redirect('/cinemas/management');
        });
};

exports.search = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body, req.query);

    CinemaActions.search(agrs)
        .then(({ cinemas, suppliers }) => {
            res.render('Cinema/search', {
                title: 'Tất cả các rạp chiếu phim',
                cinemas,
                suppliers,
            });
        })
        .catch((err) => {
            res.redirect('/cinemas/search');
        });
};

exports.geojson = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body, req.query);

    CinemaActions.search(agrs)
        .then(({ cinemas, suppliers }) => {
            const cinemasFeatures = cinemas.map((i) => {
                const properties_temp = {
                    id: i._id,
                    name: i.name,
                    district: i.district,
                    address: i.address,
                    hotline: i.hotline,
                };

                return {
                    type: 'Feature',
                    properties: properties_temp,
                    geometry: i.location,
                };
            });
            res.json({ features: cinemasFeatures });
        })
        .catch((err) => {
            res.redirect('/');
        });
};

exports.map = async (req, res, next) => {
    res.render('Cinema/map', { title: 'Bản đồ các rạp chiếu phim' });
};

exports.getDetail = async (req, res, next) => {
    CinemaActions.getDetail(req.params.name)
        .then(({ cinema, movieShowtimes }) => {
            res.render('Cinema/detail', {
                title: `${cinema.name} - Lịch chiếu`,
                cinema,
                movieShowtimes,
            });
        })
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
        .then((data) => {
            res.redirect('/cinemas/management');
        })
        .catch(sendError(req, res));
};

exports.delete = async (req, res, next) => {
    CinemaActions.delete(req.params.id)
        .then((data) => {
            res.redirect('/cinemas/management');
        })
        .catch(sendError(req, res));
};
