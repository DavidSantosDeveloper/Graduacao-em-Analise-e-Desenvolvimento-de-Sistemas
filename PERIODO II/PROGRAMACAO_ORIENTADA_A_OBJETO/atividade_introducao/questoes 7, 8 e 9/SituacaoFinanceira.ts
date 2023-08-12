export class SituacaoFinanceira{
    private valorCreditos:number;
    private valorDebitos:number;

    constructor( valorCreditos:number, valorDebitos:number){
        this.valorCreditos=valorCreditos
        this.valorDebitos=valorDebitos
    }

    getValorCreditos():number{
       return this.valorCreditos
    }
    setValorCreditos(novo_valor:number):void{
        this.valorCreditos=novo_valor
    }

    getvalorDebitos():number{
        return this.valorDebitos
     }
     setvalorDebitos(novo_valor:number):void{
         this.valorDebitos=novo_valor
     }


    saldo():number{
        return this.getValorCreditos()-this.getvalorDebitos()
    }

}