export class Postagem {
    id;
    texto;
    quantidadeCurtidas;
    constructor(id, texto, quantidadeCurtidas) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }
    curtir() {
        this.quantidadeCurtidas++;
    }
    toString() {
        return `
        ________________Postagem:  ${this.id}______________________
        #id:  ${this.id}
        #texto:  "${this.texto}"
        #quantidadeCurtidas:  ${this.quantidadeCurtidas} curtida(s).
        ___________________________________________________________
        `;
    }
}
let postagem = new Postagem(1, "postagem de hoje", 1);
console.log(postagem.toString());
