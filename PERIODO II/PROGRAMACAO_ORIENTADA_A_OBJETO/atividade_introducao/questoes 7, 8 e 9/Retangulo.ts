export class Retangulo {
    lado1: number = 0;
    lado2: number = 0;

    calcularArea(): number {
    return this.lado1 * this.lado2;
    }
    calcularPerimetro(): number{
        return (2*this.lado1) + (2*this.lado2);
    }
}
