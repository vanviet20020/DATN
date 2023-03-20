const UserActions = require('../actions/userActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.signUpForm = (req, res, next) => {
    return res.render('Admin/management', { title: 'Đăng kí' });
};

exports.signUp = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.signUp(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.loginForm = (req, res, next) => {
    return res.render('User/login', { title: 'Đăng nhập' });
};

exports.login = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.login(agrs)
        .then(({ token, message }) => {
            res.cookie('token', token, { maxAge: 900000, httpOnly: true });
            return res.redirect('/');
        })
        .catch(sendError(req, res));
};

exports.logout = (req, res, next) => {
    res.cookie('token', '', { expires: new Date(0) });
    return res.redirect('/');
};
