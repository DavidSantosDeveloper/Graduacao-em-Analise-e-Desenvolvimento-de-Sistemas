"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Espelho {
    tipo() { }
    altura() { }
    largura() { }
}
class Parede {
    altura() { }
    largura() { }
    acabamento() { }
}
class Telhado {
    constructor(tipo, area) {
        this.area = area;
        this.tipo = tipo;
    }
    retornatipo() { }
    retornaarea() { }
}
class Moradia {
    area() {
    }
    endereco() {
    }
}
class Casa extends Moradia {
    /*AQUI SE DEFINE O TIPO DE RELACIONAMENTO ENTRES AS CLASSES */
    constructor(telhado_Area_Interna, telhado_Area_Externa, parede_Quarto, parede_Banheiro, parede_Cozinha, espelho_Corredor) {
        super();
        this.telhado_Area_Interna = telhado_Area_Interna;
        this.telhado_Area_Externa = telhado_Area_Externa;
        this.parede_Quarto = parede_Quarto;
        this.parede_Banheiro = parede_Banheiro;
        this.parede_Cozinha = parede_Cozinha;
        this.espelho_Corredor = espelho_Corredor;
    }
    /*  METODOS DA CLASSSE */
    telhadoAreaInterna() { }
    telhadoAreaExterna() { }
    paredeQuarto() { }
    paredeBanheiro() { }
    paredeCozinha() { }
    espelhoCorredor() { }
}
let telhado_interno = new Telhado("telhado interno", 10);
