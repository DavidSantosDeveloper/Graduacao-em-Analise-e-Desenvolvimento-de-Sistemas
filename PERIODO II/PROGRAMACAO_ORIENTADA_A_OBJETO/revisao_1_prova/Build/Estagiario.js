import { Funcionario } from "./Funcionario.js";
export class Estagiario extends Funcionario {
    constructor(nome, data_de_nascimento, salario, curso) {
        super(nome, data_de_nascimento, salario);
        this.curso = curso;
    }
    getCurso() {
        return this.curso;
    }
    calcularSalario() {
        return super.calcularSalario() * 1.05;
    }
}
