import { Produto } from "./Produto.js";
export class ProdutoPerecivel extends Produto {
    data_de_validade;
    constructor(id, nome, descrição, quantidade_de_produtos_em_estoque, valor_unitario, data_de_validade) {
        super(id, nome, descrição, quantidade_de_produtos_em_estoque, valor_unitario);
        this.data_de_validade = data_de_validade;
    }
    verificarValidade() {
        let data_atual = new Date();
        let comparacao_ano = data_atual.getFullYear() <= this.data_de_validade.getFullYear();
        let comparacao_mes = data_atual.getFullYear() <= this.data_de_validade.getFullYear();
        let comparacao_dia = data_atual.getDate() <= this.data_de_validade.getDate();
        if (comparacao_ano == true && comparacao_mes == true && comparacao_dia == true) {
            return true;
        }
        else {
            return false;
        }
    }
    reporUnidades(quantidade_reposta) {
        this.setQuantidadeDeProdutosEmEstoque(quantidade_reposta);
        console.log("override!!!!");
    }
    retirarUnidades(quantidade_retirada) {
        this.setQuantidadeDeProdutosEmEstoque(this.getQuantidadeDeProdutosEmEstoque() - quantidade_retirada);
        console.log("override!!!!");
    }
}
let p = new ProdutoPerecivel("1", "arrozz", "prod 1", 2, 4, new Date());
p.reporUnidades(1);
