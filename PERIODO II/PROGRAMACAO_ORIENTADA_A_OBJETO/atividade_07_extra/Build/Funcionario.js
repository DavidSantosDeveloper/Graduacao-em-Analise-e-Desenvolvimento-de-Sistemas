import { Pessoa } from "./Pessoa.js";
export class Funcionario extends Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this.matricula = matricula;
        this.salario = salario;
    }
    getMatricula() {
        return this.matricula;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(novo_valor) {
        if (novo_valor < 0)
            this.salario = 0;
        else
            this.salario = novo_valor;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario * 0.6;
    }
    calcularSalarioSegundaParcela() {
        return this.salario * 0.4;
    }
}
