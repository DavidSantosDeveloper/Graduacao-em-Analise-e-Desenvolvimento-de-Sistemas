
class Espelho{
    tipoVidro:string
    altura:number
    largura:number

    constructor(tipoVidro:string, altura:number, largura:number){
        this.tipoVidro=tipoVidro
        this.altura=altura
        this.largura=largura
    }
    
    obterTipoVidro(){
        return this.tipoVidro
    }
    obterAltura(){
        return this.altura
    }
    obterLargura(){
        return this.largura
    }
}

class Parede{
    altura:number
    largura:number
    acabamento:string

    constructor( altura:number,largura:number,acabamento:string){
        this.altura=altura
        this.largura=largura
        this.acabamento=acabamento
    }

    public obterAltura(){
        return this.altura
    }
    public obterLargura(){
        return this.largura
    }
    public obterAcabamento(){
        return this.acabamento
    }
}

class Telhado{
    tipo:string
    area:number

    constructor(tipo:string,area:number){
        this.area=area
        this.tipo=tipo
    }


    obterTipo(){
        return this.tipo
    }
    obterArea(){
        return this.area
    }
}

class Moradia{
    
    area:string
    endereco:number


    constructor( area:string, endereco:number){
        this.area=area
        this.endereco=endereco
    }


    public obterArea(){
        return this.area
    }
   public obterEndereco(){
        return this.endereco
   }

}

class Casa extends Moradia{


    /*COMPOSICAO COM CLASSE TELHADO */
    telhado_Area_Interna?:Telhado;
    telhado_Area_Externa?:Telhado;

  /*COMPOSICAO COM A CLASSE QUARTO */
    parede_Quarto?:Parede;
    parede_Banheiro?:Parede;
    parede_Cozinha?:Parede;

 /* AGREGACAO COM A CLASSE ESPELHO */
    espelho_Corredor?:Espelho; 


    /*AQUI DA-SE VALORES INICIAIS OS ATRIBUTOS QUE TODA MORADIA TEM  */
    constructor(area:string, endereco:number){
        super(area, endereco);
    }
    
    /*  METODOS DA CLASSSE */

    obterTelhadoAreaInterna(){
        return this.telhado_Area_Interna
    }
    obterTelhadoAreaExterna(){
        return this.telhado_Area_Externa
    }
    obterParedeQuarto(){
        return this.parede_Quarto
    }
    obterParedeBanheiro(){
        return this.parede_Banheiro
    }
    obterParedeCozinha() {
        return this.parede_Banheiro
    }
    obterEspelhoCorredor(){
        return this.espelho_Corredor
    }


     /*  METODOS DA PARA DEFINIR OS VALORES INICIAIS
     PARA CADA UMA DAS CLASSES DA COMPOSICAO  */

    definirTelhadoAreaInterna(material_telhado:string,area_em_metros_quadrados:number){

        this.telhado_Area_Interna=new Telhado(material_telhado,area_em_metros_quadrados)
    }
    definirtelhadoAreaExterna(material_telhado:string,area_em_metros_quadrados:number){

        this.telhado_Area_Externa=new Telhado(material_telhado,area_em_metros_quadrados)
    }
    
    definirParedeQuarto(altura:number, largura:number, acabamento:string){

        this.parede_Quarto=new Parede(altura, largura, acabamento)
    }
    definirParedeBanheiro(altura:number, largura:number, acabamento:string){

        this.parede_Banheiro=new Parede(altura, largura, acabamento)
    }
    definirParedeCozinha(altura:number, largura:number, acabamento:string){

        this.parede_Cozinha=new Parede(altura, largura, acabamento)
    }


     /*  AGREGACAO */
    definirEspelhoCorredor(espelho_do_corredor:Espelho){

        this.espelho_Corredor=espelho_do_corredor
    }


}



let casa:Casa =new Casa("25 m2",1025)

casa.definirTelhadoAreaInterna("ceramica",25)
casa.definirtelhadoAreaExterna("galvanizada",20)

casa.definirParedeQuarto(5,5,"Drywall")
casa.definirParedeBanheiro(5,2,"Alvenaria")
casa.definirParedeCozinha(5,8,"madeira")


let espelho_do_corredor=new Espelho("vidro comum",5,5)
casa.definirEspelhoCorredor(espelho_do_corredor)


console.log(casa)

//let telhado=casa.telhado_Area_Interna
//casa=null

//console.log(casa)
//console.log(telhado)







