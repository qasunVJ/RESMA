var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

/* GET home page. */
router.get('/', restrict, function(req, res, next) {
    console.log(req.user);
    var vmd = {
        title: 'Resma | Home',
        fname: req.user ? req.user.name : null,
        isInside: true
    };
    res.render('home', vmd);
});

router.get('/settings', restrict, function (req, res, next) {
    var vmd = {
        title: 'Resma | Settings',
        isInside: true
    };
    res.render('home/settings', vmd);
});

router.get('/orders', restrict, function (req, res, next) {
    var vmd = {
        title: 'Resma | Orders',
        isInside: true
    };
    res.render('home/orders', vmd);
});

module.exports = router;