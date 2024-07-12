const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
require('dotenv').config();

const User = require('../models/User');

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
//Passport JWT strategy options
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY,
};

// Configure Passport to use the JWT strategy
passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
        const user = await User.find((u) => u.id === jwtPayload.id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }),
);

// Initialize Passport
let passportConfig = (app) => {
    app.use(passport.initialize());
};

module.exports = { passportConfig };
