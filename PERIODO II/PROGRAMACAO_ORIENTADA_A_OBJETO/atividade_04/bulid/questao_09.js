"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor;
            return true;
        }
        else {
            return false;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valorTransferido) {
        if (valorTransferido <= this.saldo) {
            this.sacar(valorTransferido);
            contaDestino.depositar(valorTransferido);
            return true;
        }
        else {
            return false;
        }
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>Instanciacao<<<<<<<<<<<<<<<<<<<<<<<<
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
console.log("\n\n>>>>>>>>>>>CONTA<<<<<<<<<<<");
console.log("conta 1 => ", c1);
console.log("conta 2 => ", c2);
console.log("\n>>>>>>>>>>>RESULTADO DA TRANSFERENCIA<<<<<<<<<<<");
let valor_da_transferencia = 100;
console.log(c1.transferir(c2, valor_da_transferencia) ? `Transferencia de R$ ${valor_da_transferencia} feita com sucesso!!!` : "Nao há dinheiro suficiente na conta origem para realizar a transferencia!!!!!");
console.log("conta 1 => ", c1);
console.log("conta 2 => ", c2);
