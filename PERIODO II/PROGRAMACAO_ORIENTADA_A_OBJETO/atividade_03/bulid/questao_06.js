"use strict";
function exibir_textos(...lista_de_textos) {
    lista_de_textos.forEach((elemento_atual) => {
        console.log(elemento_atual);
    });
}
exibir_textos("fco", "david", "santos", "sousa");
