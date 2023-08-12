"use strict";
class Conta {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
}
let c1 = new Conta();
c1.id = 1;
c1.depositar(100);
c1.depositar(20);
console.log(c1.saldo);
let c2 = new Conta();
c2.id = 2;
c2.depositar(1000);
console.log(c2);
class Cachorro {
    constructor() {
        this.raca = "";
        this.cor = "";
        this.idade = 0;
    }
    latir() {
        console.log('au au');
    }
    latirRosnando() {
        this.latir();
        console.log("rrrrr ");
    }
}
let cachorro1 = new Cachorro();
cachorro1.cor = "preto";
cachorro1.raca = "pinscher";
cachorro1.latirRosnando();
