const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('../models/Produto.js')
const Produto = mongoose.model('produtos')

router.use(bodyParser.json());

// Listar Produto(s)
router.get('/produtos', (req, res) => {
    Produto.find()
        .then(produtos => {
            res.json(produtos)
        })
        .catch(err => {
            console.log('Erro ao listar produtos', err)
        })
})

// Cadastrar Produto
router.post('/produtos/salvar', (req, res) => {
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
router.get('/produtos/buscar/:id', (req, res) => {
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
router.get('/produtos/:id', (req, res) => {
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
router.put('/produtos/atualizar/:id', (req, res) => {
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
router.delete('/produtos/deletar/:id', (req, res) => {
    Produto.deleteOne({_id: req.params.id})
        .then(produto => {
            console.log('Produto deletado com sucesso!')
            res.json(produto)
        })
        .catch(err => {
            console.log('Erro ao deletar o produto: ' + err)
        })
})

// let projeto = [
//   {
//     "id": 1,
//     "name": "Chocolate em pó",
//     "dataDeValidade": "20/10/22",
//     "quantidade": "3.0kg",
//     "comentarios": "Para fazer brigadeiro"
//   },
//   {
//     "id": 2,
//     "name": "Sabão em pó",
//     "dataDeValidade": "02/05/24",
//     "quantidade": "3.0kg",
//     "comentarios": "Para lavar roupa"
//   }
// ];

// router.route('/')
//     .get((req, res, next) => {
//         res.statusCode = 200;
//         res.setHeader('content-Type', 'application/json');
//         res.json(projeto);
//     })
//     .post((req, res, next) => {

//         let proxId = 1 + projeto.map(p => p.id).reduce((x, y) => Math.max(x, y));
//         let product = { ...req.body, id: proxId };
//         projeto.push(product);

//         projeto.push(product);

//         res.statusCode = 200;
//         res.setHeader('content-Type', 'application/json');
//         res.json(product);
//     });


// router.route('/:id')
//     .delete((req, res, next) => {

//         projeto = projeto.filter(function (value, index, arr) {
//             return value.id != req.params.id;
//         });

//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(req.params.id);
//     })
//     .put((req, res, next) => {

//         let index = projeto.map(p => p.id).indexOf(req.params.id);
//         projeto.splice(index, 1, req.body);

//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(req.body);
//     });

module.exports = router;
