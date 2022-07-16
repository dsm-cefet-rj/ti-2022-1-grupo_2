var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('../models/Produto.js')
const Produto = mongoose.model('produtos')
const { eAdmin } = require('../authenticate');


router.use(bodyParser.json());

//TIPOS DE PRODUTO ---------------------------------

// Buscar produto por Categoria
router.get('/produtos/geladeira/:id', eAdmin, (req, res) => {
    Produto.find({categoria: req.params.id})
        .then(prodsGeladeira => {
            res.json(prodsGeladeira)
        })
        .catch(err => {
            res.send('Erro')
            console.log('Não foi possível achar o produto: ' + err)
        })
})
// Buscar produto por Categoria
router.get('/produtos/armario/:id', eAdmin, (req, res) => {
    Produto.find({categoria: req.params.id})
        .then(prodsArmario => {
            res.json(prodsArmario)
        })
        .catch(err => {
            res.send('Erro')
            console.log('Não foi possível achar o produto: ' + err)
        })
})
// Buscar produto por Categoria
router.get('/produtos/remedio/:id', eAdmin, (req, res) => {
    Produto.find({categoria: req.params.id})
        .then(prodsRemedio => {
            res.json(prodsRemedio)
        })
        .catch(err => {
            res.send('Erro')
            console.log('Não foi possível achar o produto: ' + err)
        })
})
// Buscar produto por Categoria
router.get('/produtos/suplemento/:id', eAdmin, (req, res) => {
    Produto.find({categoria: req.params.id})
        .then(prodsSuplemento => {
            res.json(prodsSuplemento)
        })
        .catch(err => {
            res.send('Erro')
            console.log('Não foi possível achar o produto: ' + err)
        })
})

// FIM TIPOS DE PRODUTO -----------------------------------------



// Listar Produto(s)
router.get('/produtos', eAdmin, (req, res) => {
    console.log(req.user);
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
router.get('/produtos/:id', eAdmin, (req, res) => {
    Produto.findById({_id: req.params.id})
        .then(produto => {
            console.log('Buscando produto pelo ID com sucesso!')
            res.send(produto)
        })
        .catch(err => {
            console.log('Erro ao busca produto pelo ID: ' + err)
        })
})

// Atualizar Produto 
router.put('/produtos/atualizar/:id', eAdmin, (req, res) => {
    Produto.findById({_id: req.params.id})
        .then(produto => {
            produto.categoria = req.body.category,
            produto.nomeProduto = req.body.nome,
            produto.dataValidade = req.body.dataDeValidade,
            produto.quantidade = req.body.quantidade,
            produto.comentario = req.body.comentarios

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


//     router.put('/produtos/atualizar/:id', eAdmin, (req, res, next) => {

//         let index = produto.map(p => p.id).indexOf(req.params.id);
//         produto.splice(index, 1, req.body);

//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(req.body);
//     })

/* router.put('/produtos/atualizar/:id', eAdmin, (req, res, next) => {
Produto.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((produto) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produto);
  }, (err) => next(err))
  .catch((err) => next(err));
}) */

module.exports = router;
