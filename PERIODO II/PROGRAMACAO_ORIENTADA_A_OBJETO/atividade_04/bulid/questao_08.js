"use strict";
class Equipamento {
    constructor(ligado = false) {
        this.ligado = ligado;
    }
    ligar() {
        if (this.ligado == false) {
            this.ligado = true;
        }
    }
    desligar() {
        if (this.ligado == true) {
            this.ligado = false;
        }
    }
    inverteEstadoLigado() {
        this.ligado = (this.ligado) == false ? true : false;
    }
    getLigado() {
        return this.ligado;
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>Instanciacao<<<<<<<<<<<<<<<<<<<<<<<<
let equipamento = new Equipamento();
console.log(`Estado atual do equipamento: ${equipamento.getLigado() ? "ligado" : "desligado"}`);
equipamento.ligar();
console.log(`ligandooooo!!!!!....... ${equipamento.getLigado() ? "ligado" : "desligado"}`);
equipamento.desligar();
console.log(`Desligandooooo agora!!!!!....... ${equipamento.getLigado() ? "ligado" : "desligado"}`);
equipamento.inverteEstadoLigado();
console.log(`invertendo o estado....... ${equipamento.getLigado() ? "ligado" : "desligado"}`);
