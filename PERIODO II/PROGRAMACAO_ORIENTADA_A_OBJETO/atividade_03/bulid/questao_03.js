"use strict";
function saudacao(nome, pronome_de_tratamento = "Sr(a)") {
    return `Bom dia, ${pronome_de_tratamento} ${nome} `;
}
console.log(saudacao("davi"));
