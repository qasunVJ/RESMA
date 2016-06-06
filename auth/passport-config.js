module.exports = function () {
    var passport = require('passport');
    var passportLocal = require('passport-local');
    var bcrypt = require('bcrypt');
    var userService = require('../services/user-service');

    passport.use(new passportLocal.Strategy({usernameField: 'email'},function (email, password, next) {
        userService.findUser(email, function (err, user) {
            if(err){
                console.log(err);
                return next(err, null);
            }
            if (!user){
                return next(null, null);
            }
            bcrypt.compare(password, user.password, function (err, match) {
                if(err) {
                    return next(err);
                }
                if (!match){
                    return next(err, null);
                }
                next(null, user);
            });
        });
    }));

    passport.serializeUser(function (user, next) {
        next(null, user.email);
    });

    passport.deserializeUser(function (email, next) {
        userService.findUser(email, function (err, user) {
            next(err, user);
        });
    });
}
