function saudacao(nome:string,pronome_de_tratamento:string="Sr(a)") :string{
    return `Bom dia, ${pronome_de_tratamento} ${nome} `
}

console.log(saudacao("davi"))