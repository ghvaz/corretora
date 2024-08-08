const prompt = require("prompt-sync")({sigint:true})

const venda = {
    
}
const prompt = require("prompt-sync")({sigint:true})
const cliente = require("./cliente.js")
const corr = require("./corretora.js")
const imovel = require("./imovel.js")
let vendas = [] 
// id_imovel: relacionar com imóvel
// id_cliente: relacionar com cliente
// id_corretor: relacionar com corretor

const venda = {

    op: () =>{
        console.log(
`1. Bairro
2. Rua
`);
    },

    printaBairro:(list) => {
        console.log("\nCASAS NO BAIRRO "+list[0].bairro)

        list.forEach((el,i) => {
            console.log("----------------------------------");
            console.log(`Cod. ${el.id} 
Rua: ${el.rua}, n⁰: ${el.numero}, Corretora: ${corr.retNOME(el.corretora)}`);
        });
        console.log("----------------------------------");

    },

    add: () => {
        let casa = +prompt("Qual o codigo da casa (ID) vendida: ")
        let casas = imovel.retPorId(casa)
        if(casas.length == 0){
            console.log("Casa não encontrada");
            do {
                let op = prompt("Quer buscar de outra forma (S/N): ")
                switch (op) {
                    case "s":
                    case "sim":

                        venda.op()
                        let ql = prompt("Pelo que quer pesquisar: ").toLowerCase()
                        switch (ql) {
                            case "1":
                            case "bairro":
                                let qual = prompt("Digite o bairro que quer pesquisar: ")
                                let cs = imovel.listPorBairro(qual)
                                venda.printaBairro(cs)
                                

                                break;
                            case value:
                                
                                break;
                            default:
                                break;
                        }
                        break;
                    case "n":
                    case "nao":
                        
                        return;
                        break;
                    default:
                        break;
                }
                
            } while (true);

        }


        // let cliente = +prompt("Qual o codigo do comprador (ID): ")
        // let cort = +prompt("Qual o codigo corretor (ID) que vendeu: ")
        
    }
}

module.exports = venda
