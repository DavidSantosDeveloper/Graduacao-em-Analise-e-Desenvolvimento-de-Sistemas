export class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    getRaio() {
        return this.raio;
    }
    setRaio(novo_valor_do_raio) {
        this.raio = novo_valor_do_raio;
    }
    calcularPerimetro() {
        return (2 * 3.14) * this.raio;
    }
    calcularArea() {
        return 3.14 * (this.raio ** 2);
    }
}
