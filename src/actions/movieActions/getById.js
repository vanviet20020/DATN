const getDataExists = require('../../helpers/getDataExists');

module.exports = async (id) => getDataExists('Movie', 'Phim', id);
