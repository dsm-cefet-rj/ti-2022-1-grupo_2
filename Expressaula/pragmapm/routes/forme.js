var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
 
let projeto = [
  {
    "id": 1,
    "name":"Chocolate em pó",
    "dataDeValidade":"20/10/22",
    "quantidade": "3.0kg",
    "comentarios": "Para fazer brigadeiro"
  },
  {
    "id": 2,
    "name":"Sabão em pó",
    "dataDeValidade":"02/05/24",
    "quantidade": "3.0kg",
    "comentarios": "Para lavar roupa"
  }
];

router.route('/')
.get((req, res, next) => {
res.statusCode = 200;
res.setHeader('content-Type', 'application/json');
res.json(projeto);
})
.post((req, res, next) => {

  let proxId = 1 + projeto.map(p => p.id).reduce((x, y) => Math.max(x, y));
  let product = { ...req.body, id: proxId };
  projeto.push(product);

  projeto.push(product);

res.statusCode = 200;
res.setHeader('content-Type', 'application/json');
res.json(product);
});


router.route('/:id')
.delete((req, res, next) => {

projeto = projeto.filter(function(value, index, arr){
  return value.id != req.params.id;
});

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
  })
.put((req, res, next) => {

  let index = projeto.map(p => p.id).indexOf(req.params.id);
    projeto.splice(index, 1, req.body);
    
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
});

module.exports = router;
