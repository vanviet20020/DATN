const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const cinemaRoutes = require('./cinemaRoutes');
const movieShowtimeRoutes = require('./movieShowtimeRoutes');
const ticketRoutes = require('./ticketRoutes');
const home = require('./home')

const route = (app) => {
    app.use('/', home)
    app.use('/users', userRoutes);
    app.use('/movies', movieRoutes);
    app.use('/cinemas', cinemaRoutes);
    app.use('/movie-showtimes', movieShowtimeRoutes);
    app.use('/tickets', ticketRoutes);
};

module.exports = route;
