export class Pessoa{
    constructor(private nome:string,private data_de_nascimento:Date){
    }

    
    public getNome() : string {
        return this.nome
    }
    getDataDeNascimento() {
      return this.data_de_nascimento
    }
    
}