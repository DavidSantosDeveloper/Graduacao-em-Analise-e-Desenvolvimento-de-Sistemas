import {Funcionario} from "./Funcionario.js"

export class Professor extends Funcionario{
    private titulacao:string

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao:string){
        super(nome, sobrenome, matricula, salario)
        this.titulacao=titulacao
    }

    getTitulacao(){
        return this.titulacao
    }
    setTitulacao(titulacao:string){
        this.titulacao=titulacao
    }

    override calcularSalarioPrimeiraParcela(){
        return this.getSalario()
    }

    override calcularSalarioSegundaParcela(){
        return 0
    }


}