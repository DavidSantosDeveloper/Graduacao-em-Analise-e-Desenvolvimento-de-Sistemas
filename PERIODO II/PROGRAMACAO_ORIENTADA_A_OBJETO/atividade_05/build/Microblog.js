import { Postagem } from "./Postagem.js";
class Microblog {
    listaDePostagens = [];
    verificar_se_ja_existe_uma_postagem_com_um_id_especifico(id_postagem) {
        let resultado_existe_postagem_com_um_id_especifico_na_lista_da_postagem = false;
        for (let indice_atual = 0; indice_atual < this.listaDePostagens.length; indice_atual++) {
            let postagem_atual = this.listaDePostagens[indice_atual];
            if (postagem_atual.id == id_postagem) {
                resultado_existe_postagem_com_um_id_especifico_na_lista_da_postagem = true;
                break;
            }
        }
        return resultado_existe_postagem_com_um_id_especifico_na_lista_da_postagem;
    }
    consultarIndiceDeUmaPostagemPeloId(id_postagem) {
        let indice_da_postagem_procurada_na_lista_da_postagem = -1;
        for (let indice_atual = 0; indice_atual < this.listaDePostagens.length; indice_atual++) {
            let postagem_atual = this.listaDePostagens[indice_atual];
            if (postagem_atual.id == id_postagem) {
                indice_da_postagem_procurada_na_lista_da_postagem = indice_atual;
                break;
            }
        }
        return indice_da_postagem_procurada_na_lista_da_postagem;
    }
    adicionarPostagem(nova_postagem) {
        if (this.verificar_se_ja_existe_uma_postagem_com_um_id_especifico(nova_postagem.id) == false) {
            this.listaDePostagens.push(nova_postagem);
        }
    }
    removerPostagem(id_postagem) {
        let indice_da_postagem = this.consultarIndiceDeUmaPostagemPeloId(id_postagem);
        if (id_postagem != -1) {
            for (let indice_atual = id_postagem; indice_atual < this.listaDePostagens.length; indice_atual++) {
                this.listaDePostagens[indice_atual] = this.listaDePostagens[indice_atual + 1];
            }
            this.listaDePostagens.pop();
        }
    }
    retornarPostagemMaisCurtida() {
        let postagem_com_mais_likes = this.listaDePostagens.reduce((postagemAnterior, postagemAtual, currentIndex, array) => {
            if (postagemAtual.quantidadeCurtidas > postagemAnterior.quantidadeCurtidas) {
                return postagemAtual;
            }
            else {
                return postagemAnterior;
            }
        });
        return postagem_com_mais_likes;
    }
    curtirUmaPostagemPeloId(id_postagem) {
        let indice_da_postagem = this.consultarIndiceDeUmaPostagemPeloId(id_postagem);
        if (indice_da_postagem != -1) {
            this.listaDePostagens[indice_da_postagem].curtir();
        }
    }
    toString() {
        let mensangem = `\n\n\n\n------------>>>>>>>>>> toString MICROBLOG <<<<<<<<<<-------------\n\n\n\n`;
        for (const postagem_atual of this.listaDePostagens) {
            mensangem += `\n\n ${postagem_atual.toString()} \n\n `;
        }
        mensangem += `###############################################################################`;
        return mensangem;
    }
}
let post1 = new Postagem(1, " 1 postagem -hello world!!!!", 5);
let post2 = new Postagem(2, " texto da segunda postagem", 20);
let post3 = new Postagem(3, "texto da 3 postagem - 2023", 100);
let microblog = new Microblog();
microblog.adicionarPostagem(post1);
microblog.adicionarPostagem(post2);
microblog.adicionarPostagem(post3);
console.log(`________######### MICROBLOG ##########___________`);
console.log(microblog);
console.log(`__________@postagem mais curtida___________`);
console.log(microblog.retornarPostagemMaisCurtida());
console.log(microblog.toString());
