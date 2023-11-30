
class Espelho{
    tipo(){}
    altura(){}
    largura(){}
}

class Parede{
    public altura(){}
    public largura(){}
    acabamento(){}
}

class Telhado{
    tipo:string
    area:number

    constructor(tipo:string,area:number){
        this.area=area
        this.tipo=tipo
    }
    retornatipo(){}
    retornaarea(){}
}

class Moradia{

    public area(){

    }
   public endereco(){

   }


}

class Casa extends Moradia{
    /*COMPISICAO COM CLASSE TELHADO */
    telhado_Area_Interna:Telhado;
    telhado_Area_Externa:Telhado;

  /*COMPOSICAO COM A CLASSE QUARTO */
    parede_Quarto:Parede;
    parede_Banheiro:Parede;
    parede_Cozinha:Parede;

 /*     AGREGACAO COM A CLASSE ESPELHO */
    espelho_Corredor?:Espelho; 


    /*AQUI SE DEFINE O TIPO DE RELACIONAMENTO ENTRES AS CLASSES */
    constructor(
        telhado_Area_Interna:Telhado,
        telhado_Area_Externa:Telhado,
        parede_Quarto:Parede,
        parede_Banheiro:Parede,
        parede_Cozinha:Parede,
        espelho_Corredor?:Espelho){



        super();

        this.telhado_Area_Interna=telhado_Area_Interna
        this.telhado_Area_Externa=telhado_Area_Externa
        this.parede_Quarto=parede_Quarto
        this.parede_Banheiro=parede_Banheiro
        this.parede_Cozinha=parede_Cozinha
        this.espelho_Corredor=espelho_Corredor
    }
    
    
    /*  METODOS DA CLASSSE */

    telhadoAreaInterna(){}
    telhadoAreaExterna(){}
    
    paredeQuarto(){}
    paredeBanheiro(){}
    paredeCozinha(){}

    espelhoCorredor(){}

}






let telhado_interno=new Telhado("telhado interno",10)







export {}