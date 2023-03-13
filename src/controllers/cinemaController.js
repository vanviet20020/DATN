const CinemaActions = require('../actions/cinemaActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.createForm = async (req, res, next) => {
    CinemaActions.createForm()
        .then((suppliers) => {
            if (!suppliers || !suppliers.length) {
                suppliers = [
                    {
                        "_id": "63eb985f7b1e6948879be998",
                        "name": "Lotte Cinema",
                        "img_price_ticket": "lotte.png",
                        "ticket_price": 80000,
                        "cinemas": [
                            "63f65ffc995e8d407613cc04"
                        ]
                    },
                    {
                        "_id": "63eb985f7b1e6948879be999",
                        "name": "Galaxy Cinema",
                        "img_price_ticket": "galaxy.png",
                        "ticket_price": 70000
                    },
                    {
                        "_id": "63eb985f7b1e6948879be99b",
                        "name": "BHD Star Cineplex",
                        "img_price_ticket": "bhd.png",
                        "ticket_price": 70000
                    },
                    {
                        "_id": "63eb985f7b1e6948879be99c",
                        "name": "Beta Cineplex",
                        "img_price_ticket": "beta.jpg",
                        "ticket_price": 45000
                    },
                    {
                        "_id": "63eb985f7b1e6948879be99d",
                        "name": "CGV Cinemas",
                        "img_price_ticket": "cgv.png",
                        "ticket_price": 85000
                    }
                ]
            }
            res.render('Cinema/create', { title: "Tạo rạp chiếu phim mới", suppliers })
        })
        .catch((err) => {
            res.send(err)
        });
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
        .then((cinema, suppliers) => {
            if (!suppliers || !suppliers.length) {
                suppliers = [
                    {
                        "_id": "63eb985f7b1e6948879be998",
                        "name": "Lotte Cinema",
                        "img_price_ticket": "lotte.png",
                        "ticket_price": 80000,
                        "cinemas": [
                            "63f65ffc995e8d407613cc04"
                        ]
                    },
                    {
                        "_id": "63eb985f7b1e6948879be999",
                        "name": "Galaxy Cinema",
                        "img_price_ticket": "galaxy.png",
                        "ticket_price": 70000
                    },
                    {
                        "_id": "63eb985f7b1e6948879be99b",
                        "name": "BHD Star Cineplex",
                        "img_price_ticket": "bhd.png",
                        "ticket_price": 70000
                    },
                    {
                        "_id": "63eb985f7b1e6948879be99c",
                        "name": "Beta Cineplex",
                        "img_price_ticket": "beta.jpg",
                        "ticket_price": 45000
                    },
                    {
                        "_id": "63eb985f7b1e6948879be99d",
                        "name": "CGV Cinemas",
                        "img_price_ticket": "cgv.png",
                        "ticket_price": 85000
                    }
                ]
            }
            res.render('Cinema/update', { title: "Tạo rạp chiếu phim mới", cinema, suppliers })
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
