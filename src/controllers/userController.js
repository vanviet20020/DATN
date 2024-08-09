const UserActions = require('../actions/userActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.signUpForm = (req, res, next) => {
    return res.render('User/signUp', { title: 'Đăng kí' });
};

exports.signUp = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.signUp(agrs)
        // .then(sendSuccess(req, res))
        .then(res.redirect('/users/sign-in'))
        .catch(sendError(req, res));
};

exports.signInForm = (req, res, next) => {
    return res.render('User/signIn', { title: 'Đăng nhập' });
};

exports.signIn = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.signIn(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.signOff = (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.signOff(agrs)
        .then((data) => {
            res.cookie('token', '', { expires: new Date(0) });
            res.cookie('refreshToken', '', { expires: new Date(0) });
            return data;
        })
        .then(res.redirect('/'))
        .catch(sendError(req, res));
};

exports.refreshToken = (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.refreshToken(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getAll = (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.getAll(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
