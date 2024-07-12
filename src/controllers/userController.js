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
        .then((data) => {
            res.cookie('token', data.token, {
                httpOnly: true,
                sameSite: 'None',
                secure: true,
                maxAge: 15 * 60 * 1000,
            });
            res.cookie('refreshToken', data.refreshToken, {
                httpOnly: true,
                sameSite: 'None',
                secure: true,
                maxAge: 30 * 24 * 60 * 60 * 1000,
            });
            return data;
            // return res.status(200).send('Login success');
        })
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.signOff = (req, res, next) => {
    res.cookie('token', '', { expires: new Date(0) });
    return res.redirect('/');
};

exports.refreshToken = (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.refreshToken(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.getAll = (req, res, next) => {
    const agrs = Objecta.assign({}, req.params, req.body);

    UserActions.getAll(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};
