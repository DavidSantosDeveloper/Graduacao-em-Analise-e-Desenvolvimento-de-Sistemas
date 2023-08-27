/*function filtrar_uma_lista<T>(lista:T[],funcao_de_filtragem:Function){
    let lista_filtrada:T[]=[]

    for (let indice_atual = 0; indice_atual < lista.length; indice_atual++) {
        if(funcao_de_filtragem(lista[indice_atual])){
            lista_filtrada.push(lista[indice_atual])
        }
    }

    return lista_filtrada

}


let a=filtrar_uma_lista([-5,-4,-3,-2,-1,0,1,2,3,4,5],(numero_atual:number)=>{
    return numero_atual>=0 ? true :false
})

console.log(a)
*/


let lista_de_inteiros: number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let lista_de_pares=lista_de_inteiros.filter((valor,indice_atual,lista_original)=>{
    return valor%2==0 ? true :false
})

console.log(`lista_original=> [${lista_de_inteiros}]`)
console.log(`lista_dos_numeros_pares => [${lista_de_pares}]`)


