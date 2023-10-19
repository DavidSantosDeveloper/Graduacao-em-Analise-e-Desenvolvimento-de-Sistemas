export  class Produto{
   private id:string
   private nome:string
   private descricao:string
   private quantidade_de_produtos_em_estoque:number
   private valor_unitario:number
   
   constructor(id:string,nome:string,descricao:string,quantidade_de_produtos_em_estoque:number,valor_unitario:number){
        this.id=id
        this.nome=nome
        this.descricao=descricao
        this.quantidade_de_produtos_em_estoque=quantidade_de_produtos_em_estoque
        this.valor_unitario=valor_unitario
   }

   reporUnidades(quantidade_reposta:number){
      this.quantidade_de_produtos_em_estoque+=quantidade_reposta
   }
   retirarUnidades(quantidade_retirada:number){
      this.quantidade_de_produtos_em_estoque-=quantidade_retirada
   }


   getId(){
      return this.id
   }
   getNome(){
      return this.nome
   }

   getQuantidadeDeProdutosEmEstoque(){
      return this.quantidade_de_produtos_em_estoque
   }
   setQuantidadeDeProdutosEmEstoque(nova_quantidade:number){
      this.quantidade_de_produtos_em_estoque=nova_quantidade
   }

}