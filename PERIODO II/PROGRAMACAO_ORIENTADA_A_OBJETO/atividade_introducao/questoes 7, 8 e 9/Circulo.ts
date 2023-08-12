export class Circulo {
    private raio:number;

    constructor(raio:number){
        this.raio=raio
    }

    getRaio():number{
        return this.raio
    }
    setRaio(novo_valor_do_raio:number):void{
        this.raio=novo_valor_do_raio
    }

    calcularPerimetro():number{
        return (2*3.14)*this.raio
    }

    calcularArea():number{
        return 3.14*(this.raio**2)
    }
}