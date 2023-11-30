class Calculadora {
    numero1;
    numero2;
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    somar() {
        return this.numero1 + this.numero2;
    }
    subtrair() {
        return this.numero1 - this.numero2;
    }
    multiplicar() {
        return this.numero1 * this.numero2;
    }
    dividir() {
        return this.numero1 / this.numero2;
    }
    getNumero1() {
        return this.numero1;
    }
    setNumero1(novo_numero) {
        this.numero1 = novo_numero;
    }
    getNumero2() {
        return this.numero2;
    }
    setNumero2(novo_numero) {
        this.numero2 = novo_numero;
    }
}
class CalculadoraCientifica extends Calculadora {
    exponenciar() {
        return this.getNumero1() ** this.getNumero2();
    }
}
let calc = new CalculadoraCientifica(1, 2);
console.log("____________>>>>>>>>>>>>>CALCULADORA CIENTIFICA<<<<<<<<______________");
console.log(calc);
console.log(`######   SOMA => ${calc.somar()}`);
console.log(`######   SUBTRACAO => ${calc.subtrair()}`);
console.log(`######   MULTIPLICACAO => ${calc.multiplicar()}`);
console.log(`######   DIVIDIR => ${calc.dividir()}`);
console.log(`######   EXPONENCIAÇÃO => ${calc.getNumero1()}**${calc.getNumero2()} == ${calc.exponenciar()}`);
export {};
