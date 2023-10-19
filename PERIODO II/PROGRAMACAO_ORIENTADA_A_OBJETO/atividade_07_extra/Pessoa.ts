export class Pessoa{
    private nome:string
    private sobrenome:string

    constructor( nome:string,sobrenome:string){
        this.nome=nome
        this.sobrenome=sobrenome
    }

    getNome(){
        return this.nome
    } 
    getSobrenome(){
        return this.sobrenome
    }

    getNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }


}