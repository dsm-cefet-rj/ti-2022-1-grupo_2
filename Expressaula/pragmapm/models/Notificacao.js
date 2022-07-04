const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Notificacao = new Schema({
    nomeProduto: String,
    dataValidade: Date
})

mongoose.model('notificacoes', Notificacao)