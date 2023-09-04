class Hotel{
    quantReservas:number;


    constructor(quantidadeReservasInicial:number){
        this.quantReservas=quantidadeReservasInicial
    }

    adicionarReserva():void{
        this.quantReservas++
    }

}

let hotel:Hotel=new Hotel(2)
console.log(hotel.quantReservas)









export {}