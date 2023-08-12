export class SituacaoFinanceira {
    constructor(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    getValorCreditos() {
        return this.valorCreditos;
    }
    setValorCreditos(novo_valor) {
        this.valorCreditos = novo_valor;
    }
    getvalorDebitos() {
        return this.valorDebitos;
    }
    setvalorDebitos(novo_valor) {
        this.valorDebitos = novo_valor;
    }
    saldo() {
        return this.getValorCreditos() - this.getvalorDebitos();
    }
}
