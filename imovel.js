// Imóvel
//     numero
//     rua
//     bairro 
//     id_corretora: relacionar com corretora
const prompt = require("prompt-sync")({sigint:true})
let ultID = 0 
let corretoras = require("../index.js")
let crud = require("./cliente.js")
let a=[]

const imovel = {
    model: (id = ++ultID) => {
        let bairro = prompt("Digite o bairro da casa: ")
        let rua = prompt("Digite o rua da casa: ")
        let numero = +prompt("Digite o numero da casa: ")
        if(isNaN(numero)){
            prompt("numero invalido. Enter para retornar")
            
            return undefined;
        }
        let corretora = (prompt("Digite o corretora da casa: ")).toLocaleLowerCase()
        let indice = corretoras.findIndex(el => el.nome == corretora)
        if(indice == (-1)){
            console.log("Corretora invalida.");
            
            return undefined
        }
        
        return {id, bairro, rua, numero, corretora}
    },

    add: (array) => {
        let novo = imovel.model()
        if(novo){
            array.push(novo)
        }
    },

    list: (array) => {
        if(array.length != 0){
            array.forEach(el => {
                console.log("----------------------------")
                console.log(`ID: ${el.id}
            End: ${el.rua}, ${el.numero}, ${el.bairro}`);
            });
            console.log("----------------------------")

            return true
        }else{
            console.log("Sem registros.");

            return false
        }
    },
    remove: (array) => {
        if(imovel.list(array)){

        }
    },
}

// imovel.remove(a)


// imovel.add(a)
// imovel.add(a)

// imovel.remove(a)
