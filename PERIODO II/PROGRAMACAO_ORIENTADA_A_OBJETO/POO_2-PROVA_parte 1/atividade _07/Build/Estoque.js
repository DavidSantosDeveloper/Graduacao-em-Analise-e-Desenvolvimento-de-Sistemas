import { Produto } from "./Produto.js";
import { ProdutoPerecivel } from "./ProdutoPerecivel.js";
class Estoque {
    lista_de_produtos = [];
    adicionarProduto(novo_produto) {
        let existencia_id_do_produto = this.verificarExistenciaDeUmProduto(novo_produto.getId());
        let existencia_nome_produto = this.verificarExistenciaDeUmNomeDeProduto(novo_produto.getNome());
        //FAIL FAST
        if (existencia_id_do_produto == true || existencia_nome_produto == true) {
            return;
        }
        else if (novo_produto instanceof ProdutoPerecivel) {
            if (novo_produto.verificarValidade() == false)
                return;
        }
        this.lista_de_produtos.push(novo_produto);
    }
    consultarProduto(id_produto_procurado) {
        let produto_procurado = null;
        for (const produto_atual of this.lista_de_produtos) {
            if (produto_atual.getId() == id_produto_procurado) {
                produto_procurado = produto_atual;
                break;
            }
        }
        return produto_procurado;
    }
    verificarExistenciaDeUmProduto(id_produto_procurado) {
        for (const produto_atual of this.lista_de_produtos) {
            if (produto_atual.getId() == id_produto_procurado) {
                return true;
            }
        }
        return false;
    }
    verificarExistenciaDeUmNomeDeProduto(nome_de_produto) {
        let resultado = false;
        for (const produto_atual of this.lista_de_produtos) {
            if (produto_atual.getNome() == nome_de_produto) {
                resultado = true;
                break;
            }
        }
        return resultado;
    }
    retornarIndiceDoProdutoNaLista(id_produto_procurado) {
        let indice_do_produto = -1;
        for (let indice_atual = 0; indice_atual < this.lista_de_produtos.length; indice_atual++) {
            if (this.lista_de_produtos[indice_atual].getId() == id_produto_procurado) {
                indice_do_produto = indice_atual;
                break;
            }
        }
        return indice_do_produto;
    }
    removerProduto(id_produto_a_ser_removido) {
        let lista_de_produtos_atualizada = [];
        for (const produto_atual of this.lista_de_produtos) {
            if (produto_atual.getId() != id_produto_a_ser_removido) {
                lista_de_produtos_atualizada.push(produto_atual);
            }
        }
        this.lista_de_produtos = lista_de_produtos_atualizada;
    }
    reporProduto(id_produto_a_ser_reposto, quantidade) {
        let posicao_do_produto_na_lista = this.retornarIndiceDoProdutoNaLista(id_produto_a_ser_reposto);
        if (posicao_do_produto_na_lista != -1) {
            this.lista_de_produtos[posicao_do_produto_na_lista].reporUnidades(quantidade);
        }
        /*
        if( posicao_do_produto_na_lista != -1){
            let produto=this.lista_de_produtos[posicao_do_produto_na_lista]
            if(produto instanceof ProdutoPerecivel){
                if(produto.verificarValidade()==false) return
            }
            this.lista_de_produtos[posicao_do_produto_na_lista].reporUnidades(quantidade)
        }
        
        */
    }
    retirarProduto(id_produto_a_ser_reposto, quantidade) {
        let posicao_do_produto_na_lista = this.retornarIndiceDoProdutoNaLista(id_produto_a_ser_reposto);
        if (posicao_do_produto_na_lista != -1) {
            this.lista_de_produtos[posicao_do_produto_na_lista].retirarUnidades(quantidade);
        }
        /*
              if( posicao_do_produto_na_lista != -1){
            let produto=this.lista_de_produtos[posicao_do_produto_na_lista]
            if(produto instanceof ProdutoPerecivel){
                if(produto.verificarValidade()==false) return
            }
            this.lista_de_produtos[posicao_do_produto_na_lista].retirarUnidades(quantidade)
           }
        
        */
    }
    listarProdutosVencidos() {
        let lista_de_produtos_vencidos = [];
        for (const produto_atual of this.lista_de_produtos) {
            if (produto_atual instanceof ProdutoPerecivel) {
                if (produto_atual.verificarValidade() == false)
                    lista_de_produtos_vencidos.push(produto_atual);
            }
        }
        return lista_de_produtos_vencidos;
    }
}
let p1 = new Produto("1", "camisa", "camisa simples ", 5, 10);
let p2 = new ProdutoPerecivel("2", "pao", "pao massa fina", 30, 1, new Date(2023, 10, 20, 5, 10, 1, 0));
let estoque = new Estoque();
estoque.adicionarProduto(p1);
estoque.adicionarProduto(p2);
console.log(estoque);
