import { Pessoa } from "./Pessoa.js";
export class Funcionario extends Pessoa {
    constructor(nome, data_de_nascimento, salario) {
        super(nome, data_de_nascimento);
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    calcularSalario() {
        return this.getSalario();
    }
}
