"use strict";
class Banco {
    constructor(numero = 0, saldo = "R$ 0") {
        this.numero = numero;
        this.saldo = saldo;
    }
    registro() {
    }
}
class BancoFilho extends Banco {
    registro() {
    }
}
class Hotel {
    adicionarReserva() {
        quantReservas++;
    }
}
let hotel = let, variavel = new Banco(1, 1);
