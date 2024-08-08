// Imóvel
//     numero
//     rua
//     bairro 
//     id_corretora: relacionar com corretora
const prompt = require("prompt-sync")({sigint:true})
let ultID = 3
let crtrs = require("./corretora.js")
let crud = require("./cliente.js")
let imoveis=[
{id: 1, bairro: "boa vista", rua: "antonio saad", numero: 2500, corretora: 1},
{id: 2, bairro: "boa vista", rua: "antonio saad", numero: 2510, corretora: 2},
{id: 3, bairro: "cará - cará uvaranas", rua: "jose sebastião perreira", numero: 99, corretora: 1},
]

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
        let indice = crtrs.corretoras.findIndex(el => el.nome == corretora)
        if(indice == (-1)){
            console.log("Corretora invalida.");
            
            return undefined
        }
        
        return {id, bairro, rua, numero, corretora}
    },

    retPorId: (ql) => {
        let casas = imoveis.filter((imovel) => imovel.id == ql)
        return casas
    },

    retPorRua: (ql) => {
        let casas = imoveis.filter((imovel) => imovel.rua == ql)
        return casas
    },


    listPorBairro: (ql) => {
        let casas = imoveis.filter((imovel) => imovel.bairro == ql)
        return casas

    },

    add: () => {
        let novo = imovel.model()
        if(novo){
            imoveis.push(novo)
        }
    },

    list: () => {
        if(imoveis.length != 0){
            imoveis.forEach(el => {
                console.log("----------------------------")
                console.log(`ID: ${el.id}
        Crrt: ${(crtrs.mostrarCorretora(el.corretora))}
        End: ${el.rua}, ${el.numero}, ${el.bairro}`);
            });
            console.log("----------------------------")

            return true
        }else{
            console.log("Sem registros.");

            return false
        }
    },

    remove: () => {
        if(imovel.list(imoveis)){
            let ql = +("Qual ID quer excluir: ")
            imoveis.forEach((el, i) => {
                if(el.id == ql){
                    imoveis.splice(i,1)
                    prompt("Deletado com sucesso. Enter para retornar.")
                }
            });
        }
    },

    update: () => {
        if(imovel.list()){
            let ql = +prompt("Qual ID quer alterar: ")
                imoveis.forEach((el, i) => {
                    if (el.id == ql) {
                    console.clear
                    console.log(`ID: ${el.id}
            Corretora: ${crtrs.retNOME(el.corretora)}
            End: ${el.rua}, ${el.numero}, ${el.bairro}`);
                    console.log(`O quer alterar: 
    1. Bairro
    2. Rua
    3. Numero
    4. corretora`);
                        let op = +prompt()
                        switch (op) {
                            case 1:
                                let novob = prompt("Digite o novo bairro: ")
                                el.bairro = novob
                                break;
                            case 2:
                                let novor = prompt("Digite o novo rua: ")
                                el.rua =novor
                                
                                break;
                            case 3:
                                let novon = prompt("Digite o novo numero: ")
                                el.numero =novon
                                
                                break;
                            case 4:
                                if(crtrs.list()){
                                    let novoc = +prompt("Digite o ID da nova corretora: ")
                                    el.corretora = novoc
                                }else{
                                    console.log("Sem registro de corretoras.");
                                }

                                break;
                        
                            default:
                                console.log('erro');
                                break;
                        }
                        prompt("Alterado com sucesso. Enter para retornar.")
                    }
                });
            }
        },
}


module.exports = imovel
