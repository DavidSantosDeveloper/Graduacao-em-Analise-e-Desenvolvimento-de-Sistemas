import {Pessoa} from "./Pessoa.js"

export class Funcionario extends Pessoa{
  
  constructor(nome:string,data_de_nascimento:Date,private salario:number){
    super(nome,data_de_nascimento)
  }
  getSalario(){
    return this.salario
  }
  calcularSalario(){
    return this.getSalario()
  }
}

