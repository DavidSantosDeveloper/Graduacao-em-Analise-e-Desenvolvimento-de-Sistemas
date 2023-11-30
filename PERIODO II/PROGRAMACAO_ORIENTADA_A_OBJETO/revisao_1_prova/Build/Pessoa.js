export class Pessoa {
    constructor(nome, data_de_nascimento) {
        this.nome = nome;
        this.data_de_nascimento = data_de_nascimento;
    }
    getNome() {
        return this.nome;
    }
    getDataDeNascimento() {
        return this.data_de_nascimento;
    }
}
