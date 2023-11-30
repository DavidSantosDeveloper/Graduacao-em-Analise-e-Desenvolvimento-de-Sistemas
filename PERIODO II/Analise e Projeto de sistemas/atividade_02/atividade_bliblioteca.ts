
/'Classes nucleo'/
class Bliblioteca{
      lista_de_clientes:Cliente[]=[]
      lista_de_funcionarios:Funcionario[]=[]
      lista_de_publicacoes:Publicacao[]=[]
      
      lista_de_emprestimos:Emprestimo[]=[]
      lista_de_reservas:Reserva[]=[]


      realizarEmprestimo(cliente:Cliente,funcionario:Funcionario,publicacao:Publicacao){
            let reserva_que_sera_registrada=new Reserva(cliente,funcionario,publicacao)
            
            this.lista_de_emprestimos.push(reserva_que_sera_registrada)
      }
      

}



class Cliente{
   nome?:string
   cpf?:string             
}

class Funcionario{

}




/'Classes das Regras de negocio'/
class Emprestimo{
      id?:string

}



class Reserva{
    id?:string

    cliente?:Cliente
    funcionario?:Funcionario
    publicacao?:Publicacao

    constructor(cliente:Cliente,funcionario:Funcionario,publicacao:Publicacao){
         this.cliente=cliente
         this.funcionario=funcionario
         this.publicacao=publicacao
    }
}




/' Generalizacoes'/
class Publicacao{
   id?:string
   nome?:string
   edicao?:string
   formato?:string
}


/' Especializacoes'/
class Livro extends Publicacao{
   ISBN?:string
   quantidade_de_unidades?:number
   
}



class Revistas extends Publicacao{
   quantidade_de_unidades?:number
}


class Jornal extends Publicacao{
   quantidade_de_unidades?:number
}

