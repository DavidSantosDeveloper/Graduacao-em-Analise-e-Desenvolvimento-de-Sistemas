
function reduzir_uma_lista<T>(lista:T[],funcao_de_reducao:Function,valor_inicial_padrao=lista[0]){
    let valor_em_memoria=valor_inicial_padrao

    for (let indice_atual = 1; indice_atual < lista.length; indice_atual++) {
        valor_em_memoria=funcao_de_reducao(valor_em_memoria,lista[indice_atual])  
    }

    return valor_em_memoria
}

function somar_elementos_de_uma_lista(lista:number[]){
    let soma_acumulada: number=0

    for(let indice_atual=0;indice_atual<lista.length;indice_atual++){
        soma_acumulada=soma_acumulada+lista[indice_atual]
        
    }
    return soma_acumulada
}
function multiplicar_elementos_de_uma_lista(lista:number[]){
    let multiplicacao_acumulada: number=1

    for(let indice_atual=0;indice_atual<lista.length;indice_atual++){
        multiplicacao_acumulada=multiplicacao_acumulada*lista[indice_atual]
        
    }
    return multiplicacao_acumulada
}

function subtrair_elementos_de_uma_lista(lista:number[]){
    let subtrair_acumulada: number=lista[0]

    for(let indice_atual=1;indice_atual<lista.length;indice_atual++){
        subtrair_acumulada=subtrair_acumulada-lista[indice_atual]
        
    }
    return subtrair_acumulada
}

function divisao_elementos_de_uma_lista(lista:number[]){
    let divisao_acumulada: number=lista[0]

    for(let indice_atual=1;indice_atual<lista.length;indice_atual++){
        divisao_acumulada=divisao_acumulada/lista[indice_atual]
        
    }
    return divisao_acumulada
}

console.log(somar_elementos_de_uma_lista([2,3,4]))
console.log(multiplicar_elementos_de_uma_lista([2,3,4]))
console.log(subtrair_elementos_de_uma_lista([2,3,4]))
console.log(divisao_elementos_de_uma_lista([2,3,4]))


console.log(reduzir_uma_lista([2,3,4],(valor_em_memoria:number,valor_atual:number)=>{return valor_em_memoria+valor_atual}))
