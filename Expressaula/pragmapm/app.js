let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
//Autenticacao 2 e 3 OPCAO----------------
var session = require('express-session'); // instale expression-session(npm install express-session session-file-store) são dois pacotes
var FileStore = require('session-file-store')(session);
//FIM-Autenticacao2 e 3----------------

//imports de libs para ultima autenticacao
var passport = require('express');
var authenticate = require('./authenticate');

let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let cors = require('cors')

let indexRouter = require('./routes/index');
let formeRouter = require('./routes/forme');
let usersRouter = require('./routes/users');

var config = require('./config');

let app = express();

app.use(bodyParser.json())
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//AUTENTICACAO 1° OPCAO ---------------
//app.use(cookieParser());
//AUTENTICACAO 2° OPCAO ---------------
//app.use(cookieParser('12345-67890-73567-54321'));
//AUTENTICACAO 3° OPCAO (n tem a parte comentada abaixo) ---------------
//app.use(cookieParser('12345-67890-73567-54321'));

//AUTENTICACAO 1° OPCAO ---------------

/* function auth (req, res, next) {
   console.log(req.headers);
   var authHeader = req.headers.authorization;
   if(!authHeader) {
       var err = new Error('You are not authentication!');
       res.setHeader('WWW-Authenticate', 'Basic');
       err.status = 401;
       next(err);
       return;
   }

   var auth = new Buffer.from(authHeader.splite(' ')[1], 'base64').toString().splite(':');
   var user = auth[0];
   var pass = [1];
   if(user == 'admin' && pass == 'password') {
       next();
   } else {
       var err = new Error('You are not authentication!');
       res.setHeader('WWW-Authenticate', 'Basic');
       err.status = 401;
       next(err);
   }
}  */

//FIM---AUTENTICACAO---------------

//AUTENTICACAO 2° OPCAO ---------------

/* function auth(req, res, next) {
    console.log(req.headers);
    if (!req.signedCookies.user) {
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            var err = new Error('You are not authentication!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
            return;
        }

        var auth = new Buffer.from(authHeader.splite(' ')[1], 'base64').toString().splite(':');
        var user = auth[0];
        var pass = [1];
        if (user == 'admin' && pass == 'password') {
            res.cookie('user', 'admin', { signed: true });
            next();
        } else {
            var err = new Error('You are not authentication!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
        }
    } else {
        if(req.signedCookies.user === 'admin'){
            next();
        } else {
            var err = new Error('You are not authentication!');
            err.status = 401;
            next(err);
        }
    }
} */

//FIM---AUTENTICACAO2---------------

//AUTENTICACAO 3° OPCAO ---------------
//caso for usar: vá ao gitgnore e coloque: sessions/
/* app.use(session({
    name: 'session-id',
    secret: '12345-67890-73567-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()

}));

//app.use('/', indexRouter);
app.use('/users', usersRouter);

function auth(req, res, next) {
    console.log(req.session);
    
    if(!req.session.user) {
        var err = new Error('You are not authenticated!');
        err.status = 403;
        return next(err);
    } else {
        if (req.session.user === 'autheticated') {
            next();
        }
        else {
            var err = new Error('You are not authenticated!');
            err.status = 403;
            return next(err);
        }
    }
} */    
//FIM---AUTENTICACAO3---------------

//AUTENTICACAO 4° OPCAO ---------------
/* app.use(session({
    name: 'session-id',
    secret: '12345-67890-73567-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()

}));

app.use(passport.initialize());
app.use(passport.session());

//app.use('/', indexRouter);
app.use('/users', usersRouter);

function auth(req, res, next) {
    console.log(req.user);
    
    if(!req.user) {
        var err = new Error('You are not authenticated!');
        err.status = 403;
        next(err);
    } else {
        next();
    }
} */
//FIM---AUTENTICACAO4---------------

//AUTENTICACAO 5° OPCAO ---------------
app.use(passport.initialize());

//app.use('/', indexRouter);
app.use('/users', usersRouter);


//FIM---AUTENTICACAO5---------------

// app abaixo é usado para as autenticacoes menos na 5°
//app.use(auth);

app.use(express.static(path.join(__dirname, 'public')));

app.use(formeRouter)
// Rota realocada(está na parte da autenticacao, comentada) app.use('/', indexRouter);
app.use('/forme', formeRouter);

// Mongoose
mongoose.Promise = global.Promise
/* mongoose.connect('mongodb://localhost:27017/appZero') */
/* mongoose.connect('mongodb+srv://md2alfa:gab9400G@psw-gab.fpeni5q.mongodb.net/test') */
mongoose.connect(config.mongoUrl)

    .then(() => {
        console.log('Conectado ao mongodb')
    })
    .catch(err => {
        console.log('Erro ao se conectar: ' + err)
    })

module.exports = app;
