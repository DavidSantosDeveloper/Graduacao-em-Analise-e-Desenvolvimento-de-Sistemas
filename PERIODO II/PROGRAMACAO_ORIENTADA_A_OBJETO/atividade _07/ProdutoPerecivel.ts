import {Produto} from "./Produto.js"

export class ProdutoPerecivel extends Produto{
    private data_de_validade:Date

    constructor(id:string,nome:string,descrição:string,quantidade_de_produtos_em_estoque:number,valor_unitario:number,data_de_validade:Date){
        super(id,nome,descrição,quantidade_de_produtos_em_estoque,valor_unitario)
        this.data_de_validade=data_de_validade
   }

   verificarValidade():boolean{
        let data_atual:Date=new Date()

        let comparacao_ano= data_atual.getFullYear()<=this.data_de_validade.getFullYear()
        let comparacao_mes=data_atual.getFullYear()<=this.data_de_validade.getFullYear()
        let comparacao_dia=data_atual.getDate()<=this.data_de_validade.getDate()

        if(comparacao_ano==true && comparacao_mes==true && comparacao_dia==true){
           return true
        }
        else{
          return false
        }
        
   }

   override reporUnidades(quantidade_reposta:number){
     this.setQuantidadeDeProdutosEmEstoque(quantidade_reposta)
     console.log("override!!!!")
  }
   override retirarUnidades(quantidade_retirada:number){
    this.setQuantidadeDeProdutosEmEstoque(this.getQuantidadeDeProdutosEmEstoque()-quantidade_retirada)
    console.log("override!!!!")

  }
  

}


let p=new ProdutoPerecivel("1","arrozz","prod 1",2,4,new Date())
p.reporUnidades(1)

