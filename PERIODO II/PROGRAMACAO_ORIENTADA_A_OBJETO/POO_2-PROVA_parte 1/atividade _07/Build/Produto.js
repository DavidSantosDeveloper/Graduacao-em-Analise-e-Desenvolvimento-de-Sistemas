export class Produto {
    id;
    nome;
    descricao;
    quantidade_de_produtos_em_estoque;
    valor_unitario;
    constructor(id, nome, descricao, quantidade_de_produtos_em_estoque, valor_unitario) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade_de_produtos_em_estoque = quantidade_de_produtos_em_estoque;
        this.valor_unitario = valor_unitario;
    }
    reporUnidades(quantidade_reposta) {
        this.quantidade_de_produtos_em_estoque += quantidade_reposta;
    }
    retirarUnidades(quantidade_retirada) {
        this.quantidade_de_produtos_em_estoque -= quantidade_retirada;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getQuantidadeDeProdutosEmEstoque() {
        return this.quantidade_de_produtos_em_estoque;
    }
    setQuantidadeDeProdutosEmEstoque(nova_quantidade) {
        this.quantidade_de_produtos_em_estoque = nova_quantidade;
    }
}
