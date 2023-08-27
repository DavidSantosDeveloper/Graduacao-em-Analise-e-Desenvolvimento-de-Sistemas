function mapear_uma_lista<T>(lista:T[],funcao_de_mapeamento:Function,funcao_de_criterio?:Function):T[]{
   
    let lista_mapeada:Array<T>=[]

    if(funcao_de_criterio!=undefined){
        for (let indice_atual = 0; indice_atual < lista.length; indice_atual++) {
           if(funcao_de_criterio(lista[indice_atual])){
                lista_mapeada.push(funcao_de_mapeamento(lista[indice_atual]))  
           }
           else{
                lista_mapeada.push(lista[indice_atual])
           }
        }
    }

    else{
        for (let indice_atual = 0; indice_atual < lista.length; indice_atual++) {
            lista_mapeada.push(funcao_de_mapeamento(lista[indice_atual]))
        }
    }

    return lista_mapeada
}

export function reduzir_uma_lista<T>(lista:T[],funcao_de_reducao:Function,valor_inicial_padrao=lista[0]){
    let valor_em_memoria=valor_inicial_padrao

    for (let indice_atual = 1; indice_atual < lista.length; indice_atual++) {
        valor_em_memoria=funcao_de_reducao(valor_em_memoria,lista[indice_atual])  
    }

    return valor_em_memoria
}


//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//console.log(array)
//console.log( mapear_uma_lista(array,(numero_atual:number)=>numero_atual*2,(numero:number)=>numero>=6))





let lista_ate_15=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let lista_mapeada=lista_ate_15.map((valor_atual)=>{
    return 2*valor_atual
})

let soma_da_lista_mapeada: number=lista_mapeada.reduce((valor_em_memoria,valor_atual)=>{
    return valor_em_memoria+valor_atual
})

console.log(lista_mapeada)
console.log(`soma da lista mapeada: ${soma_da_lista_mapeada}`)

