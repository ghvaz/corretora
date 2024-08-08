const prompt = require("prompt-sync")({sigint:true})
const crud = require("./cliente.js")
let crr = require("../index.js")
let corretoras = [{id:1, nome: "casa branca"}, {id:2, nome: "casa nova"}]

let ultID = 2

let corretora = {
    retNOME: (id) => {
        let rt = corretoras.filter((corretora) => corretora.id == id)
        return rt[0].nome
    },

    add: function(){
        let id = ++ultID
        let nome = prompt("Digite o nome: ")
        corretoras.push({id, nome})
        prompt("Registro foi com sucesso. Enter para continuar")
    },

    list: () => {
        if(corretoras.length > 0 ){
            corretoras.forEach(element => {
                console.log(`ID:${element.id}
    Nome: ${element.nome}`)
            });
            console.log("-------------------------");
            
            return true
        }
        prompt("Sem registros existente.")
        return false    
    },

    update: () => {
        if(corretoras.list()){
            let ql = prompt("Digite o ID do registro que quer alterar: ")
            let indice = corretoras.findIndex(element => element.id == ql)
            if(indice != (-1)){
                    let nomeNew = prompt("Digite o novo nome: ")
                    corretoras[indice].nome = nomeNew
                    
                    return;
            }
            prompt("ID não encontrado. Enter para retornar")
        }
    },

    remove: () => {
        if(corretoras.list()){
            let ql = prompt("Digite o ID que quer remover: ")
            let indice = corretoras.findIndex(element => element.id == ql)
            if(indice != (-1)){
                corretoras.splice(indice,1)
                prompt("Registro removido com sucesso.Enter para retornar.")
                
                return;
            }
        }
        prompt("ID não encontrado. Enter para retornar.")
    }
}


module.exports = corretora

