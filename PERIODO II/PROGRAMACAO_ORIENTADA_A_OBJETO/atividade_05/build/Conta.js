export class Conta {
    numero;
    nome;
    saldo;
    constructor(numero, nome, saldo) {
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    sacar(valor) {
        if (this.saldo - valor < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        if (!this.sacar(valor)) {
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    }
    // ATRIBUTO  NUMEROS
    getNumero() {
        return this.numero;
    }
    setNumero(novo_numero) {
        this.numero = novo_numero;
    }
    // ATRIBUTO  NOME
    getNome() {
        return this.nome;
    }
    setNome(novo_nome) {
        this.nome = novo_nome;
    }
    // ATRIBUTO  SALDO
    getSaldo() {
        return this.saldo;
    }
    setSaldo(novo_saldo) {
        this.saldo = novo_saldo;
    }
}
