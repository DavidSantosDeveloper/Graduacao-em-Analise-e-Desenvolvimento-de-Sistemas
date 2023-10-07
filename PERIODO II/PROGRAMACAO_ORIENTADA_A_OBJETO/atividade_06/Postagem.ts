export class Postagem{

    id:number
    texto:string
    quantidadeCurtidas:number

    constructor(id:number, texto:string,quantidadeCurtidas:number){
        this.id=id
        this.texto=texto
        this.quantidadeCurtidas=quantidadeCurtidas
    }

    curtir():void{
        this.quantidadeCurtidas++
    }
    toString():string{
        return `
        ________________Postagem:  ${this.id}______________________
        #id:  ${this.id}
        #texto:  "${this.texto}"
        #quantidadeCurtidas:  ${this.quantidadeCurtidas} curtida(s).
        ___________________________________________________________
        `
    }

}


let postagem:Postagem=new Postagem(1,"postagem de hoje",1)
console.log(postagem.toString())