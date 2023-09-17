import prompt from "prompt-sync";
import { Conta } from "./Conta.js";
//>>>>>>>>>>>>>>>>>>MENU APP.JS<<<<<<<<<<<<<<<<<<<<<<
let input = prompt();
// FUNCAO DA OPCAO 1
export function cadrastrar(banco) {
    console.log("\nCadastrar conta\n");
    let numero = input('Digite o número da conta:');
    let titular = input('Digite o nome do(a) titular da conta: ');
    let saldo = Number(input('Digite o saldo da conta (R$): '));
    let conta = new Conta(numero, titular, saldo);
    banco.inserir(conta);
}
// FUNCAO DA OPCAO 2
export function consultar(banco) {
    let titular_da_conta = input("Digite o titular da conta:");
    let conta;
    for (const conta_atual of banco.contas) {
        if (conta_atual.nome == titular_da_conta) {
            conta = conta_atual;
        }
    }
    return conta;
}
// FUNCAO DA OPCAO 3
export function sacar(banco, id_conta, valor_saque) {
    let conta_pesquisada = banco.consultar(id_conta);
    if (conta_pesquisada != undefined) {
        conta_pesquisada.sacar(valor_saque);
    }
}
// FUNCAO DA OPCAO 4
export function depositar(banco, id_conta_deposito, valor_deposito) {
    let conta_pesquisada = banco.consultar(id_conta_deposito);
    if (conta_pesquisada != undefined) {
        conta_pesquisada.depositar(valor_deposito);
    }
}
// FUNCAO DA OPCAO 5
export function excluir_conta(banco, id_conta_a_ser_excluida) {
    //fail fast
    if (banco.consultar(id_conta_a_ser_excluida) == undefined) {
        return;
    }
    banco.excluir(id_conta_a_ser_excluida);
}
// FUNCAO DA OPCAO 6
export function realizar_deposito(banco, id_conta_origem, id_conta_destino, valor_da_transferencia) {
    let conta_origem = banco.consultar(id_conta_origem);
    let conta_destino = banco.consultar(id_conta_destino);
    let verifica_se_ambas_contas_existem = conta_origem != undefined && conta_destino != undefined;
    if (verifica_se_ambas_contas_existem) {
        if (conta_origem.sacar(valor_da_transferencia) == true) {
            conta_destino.depositar(valor_da_transferencia);
        }
    }
}
// FUNCAO DA OPCAO 7
export function somar_dos_valores_das_contas_existentes(banco) {
    return banco.somar_saldo_de_todas_as_contas();
}
