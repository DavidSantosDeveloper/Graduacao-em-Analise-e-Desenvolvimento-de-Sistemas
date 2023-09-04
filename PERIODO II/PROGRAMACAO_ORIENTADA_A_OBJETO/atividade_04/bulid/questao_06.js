"use strict";
class Saudacao {
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        return `${this.texto}, ${this.destinatario}`;
    }
}
let saudacao = new Saudacao("Bom dia! 😃😃😃", "usuario(a)");
console.log(saudacao.obterSaudacao());
