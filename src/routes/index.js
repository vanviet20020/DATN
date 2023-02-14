const cinemaRoute = require("./cinemaRoute");
const movieRoute = require('./movieRoute')
const userRoute = require("./userRoute");

const route = (app) => {
    app.use("/cinemas", cinemaRoute);
    app.use('/movies', movieRoute)
    app.use("/users", userRoute);
};
module.exports = route;
