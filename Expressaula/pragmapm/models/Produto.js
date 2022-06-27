const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Produto = new Schema({
    categoria: {
        type: String,
        required: true
    },
    nomeProduto: {
        type: String,
        required: true
    },
    dataValidade: {
        type: Date,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    comentario: {
        type: String
    }
})

mongoose.model('produtos', Produto)