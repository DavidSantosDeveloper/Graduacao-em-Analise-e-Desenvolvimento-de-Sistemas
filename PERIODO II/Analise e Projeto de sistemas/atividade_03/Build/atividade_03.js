"use strict";
class Espelho {
    constructor(tipoVidro, altura, largura) {
        this.tipoVidro = tipoVidro;
        this.altura = altura;
        this.largura = largura;
    }
    obterTipoVidro() {
        return this.tipoVidro;
    }
    obterAltura() {
        return this.altura;
    }
    obterLargura() {
        return this.largura;
    }
}
class Parede {
    constructor(altura, largura, acabamento) {
        this.altura = altura;
        this.largura = largura;
        this.acabamento = acabamento;
    }
    obterAltura() {
        return this.altura;
    }
    obterLargura() {
        return this.largura;
    }
    obterAcabamento() {
        return this.acabamento;
    }
}
class Telhado {
    constructor(tipo, area) {
        this.area = area;
        this.tipo = tipo;
    }
    obterTipo() {
        return this.tipo;
    }
    obterArea() {
        return this.area;
    }
}
class Moradia {
    constructor(area, endereco) {
        this.area = area;
        this.endereco = endereco;
    }
    obterArea() {
        return this.area;
    }
    obterEndereco() {
        return this.endereco;
    }
}
class Casa extends Moradia {
    /*AQUI DA-SE VALORES INICIAIS OS ATRIBUTOS QUE TODA MORADIA TEM  */
    constructor(area, endereco) {
        super(area, endereco);
    }
    /*  METODOS DA CLASSSE */
    obterTelhadoAreaInterna() {
        return this.telhado_Area_Interna;
    }
    obterTelhadoAreaExterna() {
        return this.telhado_Area_Externa;
    }
    obterParedeQuarto() {
        return this.parede_Quarto;
    }
    obterParedeBanheiro() {
        return this.parede_Banheiro;
    }
    obterParedeCozinha() {
        return this.parede_Banheiro;
    }
    obterEspelhoCorredor() {
        return this.espelho_Corredor;
    }
    /*  METODOS DA PARA DEFINIR OS VALORES INICIAIS
    PARA CADA UMA DAS CLASSES DA COMPOSICAO  */
    definirTelhadoAreaInterna(material_telhado, area_em_metros_quadrados) {
        this.telhado_Area_Interna = new Telhado(material_telhado, area_em_metros_quadrados);
    }
    definirtelhadoAreaExterna(material_telhado, area_em_metros_quadrados) {
        this.telhado_Area_Externa = new Telhado(material_telhado, area_em_metros_quadrados);
    }
    definirParedeQuarto(altura, largura, acabamento) {
        this.parede_Quarto = new Parede(altura, largura, acabamento);
    }
    definirParedeBanheiro(altura, largura, acabamento) {
        this.parede_Banheiro = new Parede(altura, largura, acabamento);
    }
    definirParedeCozinha(altura, largura, acabamento) {
        this.parede_Cozinha = new Parede(altura, largura, acabamento);
    }
    /*  AGREGACAO */
    definirEspelhoCorredor(espelho_do_corredor) {
        this.espelho_Corredor = espelho_do_corredor;
    }
}
let casa = new Casa("25 m2", 1025);
casa.definirTelhadoAreaInterna("ceramica", 25);
casa.definirtelhadoAreaExterna("galvanizada", 20);
casa.definirParedeQuarto(5, 5, "Drywall");
casa.definirParedeBanheiro(5, 2, "Alvenaria");
casa.definirParedeCozinha(5, 8, "madeira");
let espelho_do_corredor = new Espelho("vidro comum", 5, 5);
casa.definirEspelhoCorredor(espelho_do_corredor);
console.log(casa);
//let telhado=casa.telhado_Area_Interna
//casa=null
//console.log(casa)
//console.log(telhado)
