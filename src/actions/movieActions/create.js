
const Movie = require("../../models/Movie")

module.exports = async (args, file) => {
    const {
        name,
        trailer_link,
        description,
        director,
        cast,
        release_date,
        runtime,
        language,
        genre } = args

    console.log({ args, file })


}