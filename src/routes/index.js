const otherRoutes = require('./otherRoutes');
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const cinemaRoutes = require('./cinemaRoutes');
const movieShowtimeRoutes = require('./movieShowtimeRoutes');
const ticketRoutes = require('./ticketRoutes');

const route = (app) => {
    // app.all('*', requireAuthentication);
    app.use('/users', userRoutes);
    app.use('/movies', movieRoutes);
    app.use('/cinemas', cinemaRoutes);
    app.use('/movie-showtimes', movieShowtimeRoutes);
    app.use('/tickets', ticketRoutes);
    app.use('/', otherRoutes);
};

module.exports = route;
