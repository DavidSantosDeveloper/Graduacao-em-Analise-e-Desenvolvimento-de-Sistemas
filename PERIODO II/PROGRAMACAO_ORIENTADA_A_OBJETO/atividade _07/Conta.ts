export class Conta {
    private numero: string;
    private nome: string
    private saldo: number;

    constructor(numero: string, nome: string, saldo: number) {
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {

        if (!this.sacar(valor)) {
            return false;
        }

        contaDestino.depositar(valor);
        return true;
    }

    // ATRIBUTO  NUMEROS
    getNumero():string{
        return this.numero
    }
    setNumero(novo_numero:string){
       this.numero=novo_numero
    }

    // ATRIBUTO  NOME
    getNome():string{
        return this.nome
    }
    setNome(novo_nome:string){
       this.nome=novo_nome
    }

    // ATRIBUTO  SALDO
    getSaldo():number{
        return this.saldo
    }
    setSaldo(novo_saldo:number){
       this.saldo=novo_saldo
    }
}


export class Poupanca extends Conta{
    private taxaJuros: number=0;

    constructor(numero: string,nome:string, saldo: number,taxaJuros: number ) {
        super(numero,nome,saldo);

        this.taxaJuros = taxaJuros;
    }

    public renderJuros(): void {
        this.depositar(this.getSaldo() * this.taxaJuros/100);
    }

    public getTaxaJuros():number{
        return this.taxaJuros
    }
    public setTaxaJuros(nova_taxa_juros:number):void{
        this.taxaJuros=nova_taxa_juros
    }

    

}



export class ContaImposto extends Conta{
    private _taxaDesconto: number;
    constructor(numero: string,nome:string, saldo: number,taxaDeDesconto: number) {

        super(numero,nome,saldo);
        this._taxaDesconto = taxaDeDesconto;
    }

    getTaxaImposto(){
        return this._taxaDesconto
    }
}



