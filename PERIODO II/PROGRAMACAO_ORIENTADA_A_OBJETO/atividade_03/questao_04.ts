function transformar_conteudo_de_uma_lista_em_texto_inline<T>(lista:T[]) :string{
    let lista_em_texto_inline: string=""

    lista.forEach(elemento_atual => {
        if(lista_em_texto_inline==""){
            lista_em_texto_inline+=elemento_atual
        }
        else{
            lista_em_texto_inline+=` - ${elemento_atual}`
        }
      
    });

    return lista_em_texto_inline
}


let lista:number[]=[1,2,3,4,5,6,7]
console.log(transformar_conteudo_de_uma_lista_em_texto_inline(lista))


