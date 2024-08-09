const setUserInRequest = require('../helpers/setUserInReq');
const otherRoutes = require('./otherRoutes');
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const cinemaRoutes = require('./cinemaRoutes');
const movieShowtimeRoutes = require('./movieShowtimeRoutes');
const ticketRoutes = require('./ticketRoutes');

const route = (app) => {
    app.all('*', setUserInRequest);
    app.use('/user', userRoutes);
    app.use('/movie', movieRoutes);
    app.use('/cinema', cinemaRoutes);
    app.use('/movie-showtime', movieShowtimeRoutes);
    app.use('/ticket', ticketRoutes);
    app.use('/', otherRoutes);
};

module.exports = route;
