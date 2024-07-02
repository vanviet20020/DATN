const UserActions = require('../actions/userActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.signUpForm = (req, res, next) => {
    return res.render('User/signUp', { title: 'Đăng kí' });
};

exports.signUp = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.signUp(agrs)
        .then(sendSuccess(req, res))
        .then(res.redirect('/'))
        .catch(sendError(req, res));
};

exports.signInForm = (req, res, next) => {
    return res.render('User/sign-In', { title: 'Đăng nhập' });
};

exports.signIn = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.signIn(agrs)
        .then(({ token, message }) => {
            res.cookie('token', token, { maxAge: 900000, httpOnly: true });
            return res.redirect('/');
        })
        .catch(sendError(req, res));
};

exports.signOff = (req, res, next) => {
    res.cookie('token', '', { expires: new Date(0) });
    return res.redirect('/');
};
