"use strict";
function verifica_se_um_numero_eh_primo(numero) {
    let divisor = 2;
    let resultado_da_verificacao_se_eh_primo = true;
    if (numero <= 1) {
        resultado_da_verificacao_se_eh_primo = false;
        return resultado_da_verificacao_se_eh_primo;
    }
    for (divisor; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            resultado_da_verificacao_se_eh_primo = false;
            break;
        }
    }
    return resultado_da_verificacao_se_eh_primo;
}
console.log(verifica_se_um_numero_eh_primo(11));
