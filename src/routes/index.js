const userRoute = require("./userRoute");
const movieRoute = require("./movieRoute")
const cinemaRoute = require("./cinemaRoute");
const movieShowtimeRoute = require("./movieShowtimeRoute")

const route = (app) => {
    app.use("/users", userRoute);
    app.use("/movies", movieRoute)
    app.use("/cinemas", cinemaRoute);
    app.use("/movie-showtimes", movieShowtimeRoute);
};
module.exports = route;
