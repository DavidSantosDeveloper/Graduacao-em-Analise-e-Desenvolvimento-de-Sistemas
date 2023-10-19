import { Funcionario } from "./Funcionario.js";
export class Professor extends Funcionario {
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this.titulacao = titulacao;
    }
    getTitulacao() {
        return this.titulacao;
    }
    setTitulacao(titulacao) {
        this.titulacao = titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.getSalario();
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
