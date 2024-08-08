const prompt = require("prompt-sync")({sigint:true})
const cliente = require("./cruds/cliente.js")
const corretora = require("./cruds/corretora.js")
const imovel = require("./cruds/imovel.js")
const corretor = require("./cruds/vendedor.js")
const venda = require("./cruds/vendas.js")

venda.add()
