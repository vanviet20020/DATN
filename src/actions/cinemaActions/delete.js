const { getCinema } = require('../../helpers/getDataExists');

module.exports = async (id) => {
    return getCinema(id);
};
