import { ValorInvalidoError } from "./Excecoes.js";
export class Conta {
    numero;
    nome;
    saldo;
    constructor(numero, nome, saldo = 0) {
        this.numero = numero;
        this.nome = nome;
        // if(saldo<0){
        //throw new SaldoInsuficienteError("valor de saldo inicial invalido!");
        // }
        this.saldo = 0;
        this.saldo = this.depositar(saldo) || 0;
    }
    validar_valor(valor) {
        if (valor < 0) {
            throw new ValorInvalidoError("Valor invalido!");
        }
    }
    depositar(valor) {
        /*
        if(valor<0){
            throw new ValorInvalidoError("valor de deposito invalido!");
            
        }
        */
        this.validar_valor(valor);
        return this.saldo = this.saldo + valor;
    }
    //>>>>>>>>>>>>>>   QUESTAO 03
    sacar(valor) {
        /*
        if (this.saldo - valor < 0) {
              throw new SaldoInsuficienteError("Saldo insuficiente!");
         }
          */
        this.saldo = this.saldo - valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    //>>>>>>>>>>>>>>>>>>>> QUESTAO 04 - FOI LANÇADO UMA EXCECAO POR CAUSA DO SALDO INSUFICIENTE
    transferir(contaDestino, valor) {
        contaDestino.depositar(valor);
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
