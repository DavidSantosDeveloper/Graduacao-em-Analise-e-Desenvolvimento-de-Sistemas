"use strict";
class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    verificaSeOsLadosFormamUmTrianguloValido() {
        if ((this.lado2 - this.lado3) < this.lado1 && this.lado1 < (this.lado2 + this.lado3)) {
            return true;
        }
        else {
            return false;
        }
    }
    ehEscaleno() {
        //fail fast
        if (this.verificaSeOsLadosFormamUmTrianguloValido() == false) {
            return false;
        }
        else {
            return this.lado1 != this.lado2 && this.lado1 != this.lado3;
        }
    }
    ehIsoceles() {
        //fail fast
        if (this.verificaSeOsLadosFormamUmTrianguloValido() == false) {
            return false;
        }
        else {
            let primeiro_caso = this.lado1 == this.lado2 && this.lado1 != this.lado3;
            let segundo_caso = this.lado1 == this.lado3 && this.lado1 != this.lado2;
            return primeiro_caso || segundo_caso;
            /*>>>>>>>>solucao mais simples<<<<<<<<*/
            //return this.lado1==this.lado2 || this.lado1==this.lado2
        }
    }
    ehEquilatero() {
        //fail fast
        if (this.verificaSeOsLadosFormamUmTrianguloValido() == false) {
            return false;
        }
        else {
            return this.lado1 == this.lado2 && this.lado2 == this.lado3;
        }
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>Instanciacao<<<<<<<<<<<<<<<<<<<<<<<<
let t1 = new Triangulo(10, 10, 12);
console.log(`triagulo eh escaleno: ${t1.ehEscaleno()}`);
console.log(`triagulo eh isoceles: ${t1.ehIsoceles()}`);
console.log(`triagulo eh equilatero: ${t1.ehEquilatero()}`);
