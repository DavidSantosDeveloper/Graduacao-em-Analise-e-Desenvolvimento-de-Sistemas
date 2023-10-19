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
export class Poupanca extends Conta {
    taxaJuros = 0;
    constructor(numero, nome, saldo, taxaJuros) {
        super(numero, nome, saldo);
        this.taxaJuros = taxaJuros;
    }
    renderJuros() {
        this.depositar(this.getSaldo() * this.taxaJuros / 100);
    }
    getTaxaJuros() {
        return this.taxaJuros;
    }
    setTaxaJuros(nova_taxa_juros) {
        this.taxaJuros = nova_taxa_juros;
    }
}
export class ContaImposto extends Conta {
    _taxaDesconto;
    constructor(numero, nome, saldo, taxaDeDesconto) {
        super(numero, nome, saldo);
        this._taxaDesconto = taxaDeDesconto;
    }
    getTaxaImposto() {
        return this._taxaDesconto;
    }
}
