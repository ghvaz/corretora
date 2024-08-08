const prompt = require("prompt-sync")({sigint:true})

let vendedores = []
let ultID = 0

let vendedor = {
    add: function(){
        let id = ++ultID
        let nome = prompt("Digite o nome: ")
        vendedores.push({id, nome})
        prompt("Registro foi com sucesso. Enter para continuar")
    },

    list: () => {
        if(vendedores.length > 0 ){
            vendedores.forEach(element => {
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
        if(vendedor.list()){
            let ql = prompt("Digite o ID do registro que quer alterar: ")
            let indice = vendedores.findIndex(element => element.id == ql)
            if(indice != (-1)){
                    let nomeNew = prompt("Digite o novo nome: ")
                    vendedores[indice].nome = nomeNew
                    
                    return;
            }
            prompt("ID não encontrado. Enter para retornar")
        }
    },

    remove: () => {
        if(vendedor.list()){
            let ql = prompt("Digite o ID que quer remover: ")
            let indice = vendedores.findIndex(element => element.id == ql)
            if(indice != (-1)){
                vendedores.splice(indice,1)
                prompt("Registro removido com sucesso.Enter para retornar.")

                return;
            }
        }
        prompt("ID não encontrado. Enter para retornar.")
    }
}

module.exports = vendedor
