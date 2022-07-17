const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('../models/Produto.js')
const Produto = mongoose.model('produtos')
const { eAdmin } = require('../authenticate');

router.use(bodyParser.json());

// Listar Produto(s)
router.get('/produtos', eAdmin, (req, res) => {
    Produto.find()
        .then(produtos => {
            res.json(produtos)
        })
        .catch(err => {
            console.log('Erro ao listar produtos', err)
        })
})

// Cadastrar Produto
router.post('/produtos/salvar', eAdmin, (req, res) => {
    const novoProduto = {
        categoria: req.body.category,
        nomeProduto: req.body.nome,
        dataValidade: req.body.dataDeValidade,
        quantidade: req.body.quantidade,
        comentario: req.body.comentarios
    }
    new Produto(novoProduto).save()
        .then(produto => {
            console.log('Produto salvo com sucesso!')
            res.json(produto)
            // res.send(produto);
        })
        .catch(err => {
            console.log('Erro ao salvar produto: ' + err)
        })
        
})

// Buscar produto pelo ID
router.get('/produtos/buscar/:id', eAdmin, (req, res) => {
    Produto.findById({_id: req.params.id})
        .then(produto => {
            console.log('Buscando produto pelo ID com sucesso!')
            res.json(produto)
        })
        .catch(err => {
            console.log('Erro ao busca produto pelo ID: ' + err)
        })
})

// Buscar produto por Categoria
router.get('/produtos/:id', eAdmin, (req, res) => {
    Produto.find({categoria: req.params.id})
        .then(prodsGeladeira => {
            res.json(prodsGeladeira)
        })
        .catch(err => {
            res.send('Erro')
            console.log('Não foi possível achar o produto: ' + err)
        })
})

// Atualizar Produto 
router.put('/produtos/atualizar/:id', eAdmin, (req, res) => {
    Produto.findById({_id: req.params.id})
        .then(produto => {
            produto.categoria = req.body.categoria,
            produto.nomeProduto = req.body.nomeProduto,
            produto.dataValidade = req.body.dataValidade,
            produto.quantidade = req.body.quantidade,
            produto.comentario = req.body.comentario

            produto.save()
                .then(produto => {
                    console.log('Produto atualizado com sucesso: ')
                    res.json(produto)
                })
                .catch(err => {
                    console.log('Houve um erro ao salvar o produto: ' + err)
                })
        })
        .catch(err => {
            console.log('Produto não foi atualizado: ' + err)
        })
})

// Deletar produto pelo ID
router.delete('/produtos/deletar/:id', eAdmin, (req, res) => {
    Produto.deleteOne({_id: req.params.id})
        .then(produto => {
            console.log('Produto deletado com sucesso!')
            res.json(produto)
        })
        .catch(err => {
            console.log('Erro ao deletar o produto: ' + err)
        })
})

module.exports = router;