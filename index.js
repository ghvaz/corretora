const prompt = require("prompt-sync")({sigint:true})
const cliente = require("./cruds/cliente.js")
const corretora = require("./cruds/corretora.js")

let corretoras = [{id:1, nome: "casa branca"}, {id:2, nome: "casa nova"}]
let clientes = []

// corretora.list(corretoras)


module.exports = corretoras
