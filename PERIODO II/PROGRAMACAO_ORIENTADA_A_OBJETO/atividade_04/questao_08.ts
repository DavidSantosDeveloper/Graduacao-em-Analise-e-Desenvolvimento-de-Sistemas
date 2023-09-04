class Equipamento{

    private ligado:boolean

    constructor(ligado:boolean=false){
        this.ligado=ligado
    }

    ligar():void{
        if(this.ligado==false){
            this.ligado=true
        }
    }
    desligar():void{
        if(this.ligado==true){
            this.ligado=false
        }   
    }

    inverteEstadoLigado():void{
        this.ligado=(this.ligado)==false ? true : false
    }

    getLigado():boolean{
        return this.ligado
    }
    
}



//>>>>>>>>>>>>>>>>>>>>>>>>>Instanciacao<<<<<<<<<<<<<<<<<<<<<<<<

let equipamento:Equipamento=new Equipamento()
console.log(`Estado atual do equipamento: ${equipamento.getLigado() ? "ligado" : "desligado"}`)

equipamento.ligar()
console.log(`ligandooooo!!!!!....... ${equipamento.getLigado() ? "ligado" : "desligado"}`)

equipamento.desligar()
console.log(`Desligandooooo agora!!!!!....... ${equipamento.getLigado() ? "ligado" : "desligado"}`)

equipamento.inverteEstadoLigado()
console.log(`invertendo o estado....... ${ equipamento.getLigado() ? "ligado" : "desligado" }`)

