import {Funcionario} from "./Funcionario.js"

export class Estagiario extends Funcionario{
   private curso:string;

    constructor(nome:string,data_de_nascimento:Date,salario:number,curso:string){
        super(nome,data_de_nascimento,salario)
        this.curso=curso
    }

    getCurso(){
        return this.curso
    }
    override calcularSalario(): number {
        return super.calcularSalario()*1.05
    }
}