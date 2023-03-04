const UserActions = require('../actions/userActions');
const { sendSuccess, sendError } = require('../helpers/sendReponse');

exports.signUp = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    UserActions.signUp(agrs)
        .then(sendSuccess(req, res))
        .catch(sendError(req, res));
};

exports.loginForm = (req, res, next) => {
    return res.render('user/login', { title: 'Đăng nhập' });
};

exports.login = async (req, res, next) => {
    const agrs = Object.assign({}, req.params, req.body);

    const data = await UserActions.login(agrs);

    const { token, message } = data;

    res.cookie('token', token, { maxAge: 900000, httpOnly: true });

    return res.send({ message });
};

exports.logout = (req, res, next) => {
    res.cookie('token', '', { expires: new Date(0) });
    return res.send({ message: 'Đăng xuất thành công' });
};
