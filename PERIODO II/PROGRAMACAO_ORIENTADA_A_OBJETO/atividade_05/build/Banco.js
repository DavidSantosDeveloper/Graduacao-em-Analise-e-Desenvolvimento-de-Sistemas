import { Conta } from "./Conta.js";
export class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(conta) {
        let retorno_da_pesquisa_pelo_numero_da_conta = this.consultar(conta.numero);
        console.log(retorno_da_pesquisa_pelo_numero_da_conta);
        if (retorno_da_pesquisa_pelo_numero_da_conta == null) {
            this.contas.push(conta);
        }
        /*
        if(retorno_da_pesquisa_pelo_numero_da_conta instanceof Conta){
            return
        }
        this.contas.push(conta);
        */
        /*
             if(retorno_da_pesquisa_pelo_numero_da_conta==null){
                 this.contas.push(conta);
             }
         */
    }
    consultar(numero) {
        let contaProcurada;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    alterar(conta) {
        let indiceProcurado = this.consultarPorIndice(conta.numero);
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    }
    excluir(numero) {
        let indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    sacar(numero, valor) {
        let indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            let conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    }
    tranferir(contaOrigem, contaDestino, valor_a_ser_transferido) {
        //consulta pela existencia das contas
        let consulta_pela_existencia_da_conta_origem = this.consultarPorIndice(contaOrigem.numero);
        let consulta_pela_existencia_da_conta_destino = this.consultarPorIndice(contaDestino.numero);
        //verifica se as 2 contas existem ao mesmo tempo
        let verificar_se_as_duas_contas_existem = consulta_pela_existencia_da_conta_origem != -1 && consulta_pela_existencia_da_conta_destino != -1;
        if (verificar_se_as_duas_contas_existem) {
            contaOrigem.transferir(contaDestino, valor_a_ser_transferido);
        }
    }
    contar_quantidade_de_contas() {
        return this.contas.length;
    }
    somar_saldo_de_todas_as_contas() {
        let soma_saldo = 0;
        for (const conta_atual of this.contas) {
            soma_saldo += conta_atual.saldo;
        }
        return soma_saldo;
    }
    calcular_media_dos_saldos_das_contas() {
        return this.somar_saldo_de_todas_as_contas() / this.contar_quantidade_de_contas();
    }
}
let banco = new Banco();
banco.inserir(new Conta("123", "davi", 100));
banco.inserir(new Conta("4", "joao", 200));
banco.inserir(new Conta("123", "pedro", 200));
console.log(banco);
console.log(`-----------------------------
Saldo Total
R$  ${banco.somar_saldo_de_todas_as_contas()}
conta(s) existente(s): ${banco.contar_quantidade_de_contas()} conta(s).
------------------------------------------
`);
