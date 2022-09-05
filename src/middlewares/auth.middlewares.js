const JwtStrategy = require("passport-jwt").Strategy,
      ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
      const opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: "academlo",
      };
      passport.use(
            new JwtStrategy(opts, (decoded, done) => {
                  return done(null, decoded);
            })
      );
};