import {Funcionario} from "./Funcionario.js"

export class FuncionarioCLT extends Funcionario{
   private carteira_de_trabalho:string;

    constructor(nome:string,data_de_nascimento:Date,salario:number,carteira_de_trabalho:string){
        super(nome,data_de_nascimento,salario)
        this.carteira_de_trabalho=carteira_de_trabalho
    }

    getCarteiraDeTrabalho(){
        return this.carteira_de_trabalho
    }
    override calcularSalario(): number {
        return super.calcularSalario()*1.3
    }
 
}

