const client = require('../../config/connectRedis');
const { verifyRefreshToken } = require('../../helpers/JWT');

module.exports = async (args) => {
    try {
        const { refreshToken } = args;

        if (!refreshToken) throw new Error('Không thể đăng xuất!');

        const { id } = await verifyRefreshToken(refreshToken);

        client.del(id.toString());

        return { message: 'Đăng xuất thành công' };
    } catch (error) {
        return error;
    }
};
