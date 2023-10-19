import {Pessoa} from "./Pessoa.js"
import {Funcionario} from "./Funcionario.js"
import {Professor} from "./Professor.js"

class FolhaDePagamento{
    private lista_de_pessoas:Pessoa[]=[]

    constructor(lista_de_pessoas:Pessoa[]){
        this.lista_de_pessoas=lista_de_pessoas
    }

    getListaDePessoas():Pessoa[]{
        return this.lista_de_pessoas
    }

    calcularPagamentos(){
        let soma_total_dos_salarios=0

        for (const pessoa_atual of this.lista_de_pessoas) {
            if(pessoa_atual instanceof Funcionario && pessoa_atual instanceof Professor==false){
                soma_total_dos_salarios+=pessoa_atual.getSalario()
                //console.log(pessoa_atual)
            }
            else if(pessoa_atual instanceof Professor){
                soma_total_dos_salarios+=pessoa_atual.getSalario()
               // console.log(pessoa_atual)
            }
        }

        return soma_total_dos_salarios
    }
}

let pessoa=new Pessoa("joao","sobrenome")
let funcionario=new Funcionario("jose","sousa","2023-1",1000)
let professor=new Professor("davi","santos","2023-1",2000,"Tecnológo em ADS")

let lista_de_pessoas: Pessoa[]= [pessoa,funcionario,professor]

let folha=new FolhaDePagamento(lista_de_pessoas)

console.log(folha)



console.log(">>>>>>>>>>>>>>>>>PAGAMENTO <<<<<<<<<<<<<<<<<<<<<<<")
console.log(`R$ ${folha.calcularPagamentos()}`)

