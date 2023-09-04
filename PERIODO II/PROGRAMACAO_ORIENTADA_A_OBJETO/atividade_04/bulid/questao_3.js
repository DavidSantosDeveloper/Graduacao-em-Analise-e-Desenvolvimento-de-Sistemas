"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hotel {
    constructor(quantidadeReservasInicial) {
        this.quantReservas = quantidadeReservasInicial;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.quantReservas);
