import { Funcionario } from "./Funcionario.js";
export class FuncionarioCLT extends Funcionario {
    constructor(nome, data_de_nascimento, salario, carteira_de_trabalho) {
        super(nome, data_de_nascimento, salario);
        this.carteira_de_trabalho = carteira_de_trabalho;
    }
    getCarteiraDeTrabalho() {
        return this.carteira_de_trabalho;
    }
    calcularSalario() {
        return super.calcularSalario() * 1.3;
    }
}
