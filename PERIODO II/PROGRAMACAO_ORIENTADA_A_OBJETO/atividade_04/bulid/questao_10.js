"use strict";
class Jogador {
    constructor(forca, nivel, pontos_atuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    getPontosAtuais() {
        return this.pontos_atuais;
    }
    setPontosAtuais(valor_dos_pontos_atuais) {
        this.pontos_atuais = valor_dos_pontos_atuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(jogador_atacado) {
        if (jogador_atacado.verificarSeJogadorEstaVivo()) {
            let pontos_do_atacado_apos_o_ataque = this.pontos_atuais - this.calcularAtaque();
            jogador_atacado.setPontosAtuais(pontos_do_atacado_apos_o_ataque);
        }
    }
    verificarSeJogadorEstaVivo() {
        let verificar_se_jogador_esta_vivo = (this.pontos_atuais > 0) ? true : false;
        return verificar_se_jogador_esta_vivo;
    }
    toString() {
        return `
                forca:${this.forca}
                nivel:${this.nivel}
                pontos_atuais:${this.pontos_atuais}`;
    }
}
function resultado(jogado1, jogador2) {
    if (jogador1.getPontosAtuais() > jogador2.getPontosAtuais()) {
        return `jogador 1`;
    }
    else if (jogador2.getPontosAtuais() > jogado1.getPontosAtuais()) {
        return `jogador 2`;
    }
    else {
        return 'empate';
    }
}
let jogador1 = new Jogador(500, 1, 5000);
let jogador2 = new Jogador(400, 1, 6500);
console.log("########### Dados iniciais #############");
console.log(` @JOGADOR 1:\N ${jogador1.toString()} `);
console.log(`\N @JOGADOR 2:\N ${jogador2.toString()} `);
console.log("########### LUTA #############");
console.log("j1:ahhhhhhhhhh");
console.log("j2:aaaaaaaaaaaaaaaaghrr");
console.log("Please ,Aguarde o fim da luta................");
jogador1.atacar(jogador2);
jogador2.atacar(jogador1);
jogador1.atacar(jogador2);
console.log("\n\n\n########### Dados apos a luta #############");
console.log(` @JOGADOR 1:\N ${jogador1.toString()} `);
console.log(`\N @JOGADOR 2:\N ${jogador2.toString()} `);
console.log("\n\n\n########### GANHADOR #############");
let resultado_da_luta = resultado(jogador1, jogador2);
console.log(`>>>>>>>> ${resultado_da_luta}`);
