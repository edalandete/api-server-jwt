const passport = require('passport');
require('./strategies/local.strategy')();

module.exports = function passportConfig(server) {
  server.use(passport.initialize());

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
