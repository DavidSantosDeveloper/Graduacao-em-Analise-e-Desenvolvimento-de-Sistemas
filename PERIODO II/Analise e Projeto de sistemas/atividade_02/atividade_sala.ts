
class Trem{
    tipo?:string 
    estado_atual?:string
    velocidade_atual?:string

    quantidade_de_pasageiros?:string
    capacidade_m3?:number

    

    obterEstadoAtualDoTrem()
    obterTipoDoTrem()
    Acelerar()
    reduzirVelocidade()
    Parar()
               
}


class Vagao{
    tipo?:string
    quantidade_de_Portas?:number
    dt_inicio_trabalho?:Date
}




class Motor{
   marca?:string
   potencia?:string          
}





class Rota{
   origem?:string
   destino?:string
   pontos_de_parada?:string
}



class Localizacao{
    segmento_de_trilho_atual?:string
    relacao_entre_trilho_e_quilometragem:Struct


}

class Dicionario{
    
}

