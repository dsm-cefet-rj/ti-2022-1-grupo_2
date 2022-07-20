const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const { v1: uuidv1 } = require('uuid');
const cron = require('node-cron')

const passport = require('passport');
const authenticate = require('./authenticate');

const session = require('express-session')
const FileStore = require('session-file-store')(session)

require('./models/Notificacao')
require('./models/Produto')

const Produto = mongoose.model('produtos')
const Notificacao = mongoose.model('notificacoes')

const indexRouter = require('./routes/index');
const produtosRouter = require('./routes/produtos');
const notificacaoRouter = require('./routes/notificacao');
const usersRouter = require('./routes/users');

const config = require('./config');

const app = express();

app.use(session({
    name: 'session-id',
    secret: 'ABC123DEF456GHI789',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(produtosRouter)
app.use(notificacaoRouter)
app.use(usersRouter)
app.use('/', indexRouter);
app.use('/produtos', produtosRouter);
app.use('/notificacao', notificacaoRouter);
app.use('/users', usersRouter)

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
      origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log(socket.id)
});

httpServer.listen(3004)

// Mongoose
mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost:27017/appZero')
mongoose.connect(config.mongoURI)
    .then(() => {
        console.log('Conectado ao mongodb')
    })
    .catch(err => {
        console.log('Erro ao se conectar: ' + err)
    })
    
// Criação das notificações com o NODE CRON
// 0 0 * * * todo os dias a 00:00 AM
cron.schedule('*/10 * * * * *', () => {
    Produto.find()
        .then(produtos => {
            // console.log(produtos[0].dataValidade)
            const dataAtual = new Date()
            const days = 7 // Dias para descontar da data de validade
            produtos.forEach(produto => {
                let dataValidade = produto.dataValidade.toISOString().substr(0, 10)
                let dataSubtraida = new Date(dataValidade + 'T00:00')
                dataValidade = new Date(dataValidade + 'T00:00')
                dataSubtraida.setDate(dataValidade.getDate() - days)

                if(produtos.length > 0){
                    if(dataAtual.getFullYear() === dataSubtraida.getFullYear() && dataAtual.getMonth() === dataSubtraida.getMonth() && dataAtual.getDay() === dataSubtraida.getDay()){
                        novaNotificacao = {
                            nomeProduto: produto.nomeProduto,
                            dataValidade: produto.dataValidade
                        }

                        console.log(novaNotificacao)

                        new Notificacao(novaNotificacao).save()
                            .then(notificacao => {
                                console.log('Notificação criada no BD')
                                console.log(notificacao)
                                io.emit('server:notificacao', notificacao)
                            })
                            .catch(err => console.log('Erro ao criar notificação no BD: ' + err))
                    }
                }

            })
        })
});

module.exports = app;