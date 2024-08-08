const prompt = require("prompt-sync")({sigint: true})
let cliente = []
let ultID = 0

let clientes = {
    add: function(){
        let id = ++ultID
        let nome = prompt("Digite o nome: ")
        cliente.push({id, nome})
        prompt("Registro foi com sucesso. Enter para continuar")
    },

    list: () => {
        if(cliente.length > 0 ){
            cliente.forEach(element => {
                console.log(`ID:${element.id}
    Nome: ${element.nome}`)
            });
            console.log("-------------------------");
            
            return true
        }
        prompt("Sem registros existente.")
        return false    
    },

    uptade: () => {
        if(cliente.list()){
            let ql = prompt("Digite o ID do registro que quer alterar: ")
            let indice = cliente.findIndex(element => element.id == ql)
            if(indice != (-1)){
                    let nomeNew = prompt("Digite o novo nome: ")
                    cliente[indice].nome = nomeNew
                    
                    return;
            }
            prompt("ID não encontrado. Enter para retornar")
        }
    },

    remove: () => {
        if(cliente.list()){
            let ql = prompt("Digite o ID que quer remover: ")
            let indice = cliente.findIndex(element => element.id == ql)
            if(indice != (-1)){
                cliente.splice(indice,1)
                prompt("Registro removido com sucesso.Enter para retornar.")
                const prompt = require("prompt-sync")({sigint:true})

                return;
            }
        }
        prompt("ID não encontrado. Enter para retornar.")
    }
}

// cliente.add(cliente)
// cliente.add(cliente)

// cliente.list(cliente)


module.exports = clientes
