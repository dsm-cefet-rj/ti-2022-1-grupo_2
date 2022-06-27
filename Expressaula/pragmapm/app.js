let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let cors = require('cors')

let indexRouter = require('./routes/index');
let formeRouter = require('./routes/forme');

let app = express();

app.use(bodyParser.json())
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(formeRouter)
app.use('/', indexRouter);
app.use('/forme', formeRouter);

// Mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/appZero')
    .then(() => {
        console.log('Conectado ao mongodb')
    })
    .catch(err => {
        console.log('Erro ao se conectar: ' + err)
    })

module.exports = app;
