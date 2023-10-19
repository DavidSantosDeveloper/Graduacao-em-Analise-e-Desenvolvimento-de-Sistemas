export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    getNome() {
        return this.nome;
    }
    getSobrenome() {
        return this.sobrenome;
    }
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
