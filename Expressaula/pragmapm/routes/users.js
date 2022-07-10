const express = require('express');
//const app = express();
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('../models/User.js')
const User = mongoose.model('User')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { eAdmin } = require('../authenticate');

//app.use(express.json());
router.use(bodyParser.json());

router.get('/', eAdmin, async (req, res) => {
    return res.json({
        erro: false,
        mensagem: "Listar usuários",
        id_usuario_logado: req.userId
    });
});

router.post('/cadastrar', async (req, res) => {
    var dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);

    await User.create(dados)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: usuário não cadastrado com sucesso!"
        });
    })
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email
        }
    });

    if(user === null){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta! E-mail incorreto!"
        });
    }

    if(!(await bcrypt.compare(req.body.password, user.password))){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta! Senha incorreta!"
        });
    }

    var token = jwt.sign({id: user.id}, "ABC123DEF456GHI789", {
        //expiresIn: 600 //10 min
        //expiresIn: 60 //1 min
        expiresIn: '7d' // 7 dia
    });

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token
    });
});

module.exports = router;