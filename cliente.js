const prompt = require("prompt-sync")({sigint: true})
let cliente = []
let ultID = 0

let clientes = {
    add: function(array){
        let id = ++ultID
        let nome = prompt("Digite o nome: ")
        array.push({id, nome})
        prompt("Registro foi com sucesso. Enter para continuar")
    },

    list: (array) => {
        if(array.length > 0 ){
            array.forEach(element => {
                console.log(`ID:${element.id}
    Nome: ${element.nome}`)
            });
            console.log("-------------------------");
            return true
        }
        prompt("Sem registros existente.")
        return false    
    },

    uptade: (array) => {
        if(clientes.list(array)){
            let ql = prompt("Digite o ID do registro que quer alterar: ")
            let indice = array.findIndex(element => element.id == ql)
            if(indice != (-1)){
                    let nomeNew = prompt("Digite o novo nome: ")
                    array[indice].nome = nomeNew
                    
                    return;
            }
            prompt("ID não encontrado. Enter para retornar")
        }
    },

    remove: (array) => {
        if(clientes.list(array)){
            let ql = prompt("Digite o ID que quer remover: ")
            let indice = array.findIndex(element => element.id == ql)
            if(indice != (-1)){
                array.splice(indice,1)
                prompt("Registro removido com sucesso.Enter para retornar.")
                
                return;
            }
        }
        prompt("ID não encontrado. Enter para retornar.")
    }
}

// clientes.add(cliente)
// clientes.add(cliente)

// clientes.list(cliente)


module.exports = clientes
