const prompt = require("prompt-sync")({sigint:true})
const crud = require("./cliente.js")
let crr = require("../index.js")

let ultID = 2

let corretora = {
    add: (array) => { crud.add(array) },
    list: (array) => { crud.list(array) },
    update: (array) => { crud.update(array) },
    remove: (array) => {crud.remove(array)}
}

// corretora.add(crr)
// corretora.list(crr)
module.exports = corretora
