class Banco{
    numero:number;
    saldo:string;

   
    constructor(numero:number=0, saldo:string="R$ 0"){
        this.numero= numero
        this.saldo=saldo
    }
    registro(){

    }

}

class BancoFilho extends Banco{
    override registro(){
        
    }
}


class Hotel {
    quantReservas : number;
    adicionarReserva() : void {
    quantReservas++;
    }
}

let hotel:Hotel=

let variavel:Banco=new Banco(1,1)