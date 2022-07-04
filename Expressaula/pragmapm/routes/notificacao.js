const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('../models/Notificacao.js')
const Notificacao = mongoose.model('notificacoes')

router.use(bodyParser.json());

router.get('/notificacao', (req, res) => {
    Notificacao.find().sort({_id: -1})
        .then(notificacao => {
            // console.log(notificacao)
            res.json(notificacao)
        })
        .catch(err => {
            console.log('Erro ao listar notificacoes', err)
        })
})

module.exports = router