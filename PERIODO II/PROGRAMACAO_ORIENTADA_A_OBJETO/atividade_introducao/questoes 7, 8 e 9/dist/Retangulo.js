export class Retangulo {
    constructor() {
        this.lado1 = 0;
        this.lado2 = 0;
    }
    calcularArea() {
        return this.lado1 * this.lado2;
    }
    calcularPerimetro() {
        return (2 * this.lado1) + (2 * this.lado2);
    }
}
