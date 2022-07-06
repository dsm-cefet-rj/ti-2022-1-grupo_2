var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

require('../models/User.js')
const User = mongoose.model('users')

var authenticate = require('../authenticate');

router.use(bodyParser.json());

router.post('/singup', (req, res, next) => {
    User.register(new User({username: req.body.username}),
    req.body.password, (err, user) => {
        if(err) {
            console.log('Teste')
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
        }
        else {
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({sucess: true, status: 'Registration Succesful!'}); 
            });
        }
    });    
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({sucess: true, token: token, status: 'You are succesfully logged in!'});
});
    

router.get('/logout', (req, res, next) => {
    if (req.session) {
        res.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    }
    else {
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
    }
});

module.exports = router;