import { Conta, Poupanca, ContaImposto } from "./Conta.js";
import * as fs from 'fs';
export class Banco {
    contas = [];
    CAMINHO_ARQUIVO = "./contas.txt";
    inserir(conta) {
        let retorno_da_pesquisa_pelo_numero_da_conta = this.consultar(conta.getNumero());
        console.log(retorno_da_pesquisa_pelo_numero_da_conta);
        if (retorno_da_pesquisa_pelo_numero_da_conta == null) {
            this.contas.push(conta);
        }
        else {
            console.log(`Conta ${conta.getNumero()} já cadastrada`);
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
            if (this.contas[i].getNumero() == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    alterar(conta) {
        let indiceProcurado = this.consultarPorIndice(conta.getNumero());
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
        let consulta_pela_existencia_da_conta_origem = this.consultarPorIndice(contaOrigem.getNumero());
        let consulta_pela_existencia_da_conta_destino = this.consultarPorIndice(contaDestino.getNumero());
        //verifica se as 2 contas existem ao mesmo tempo
        let verificar_se_as_duas_contas_existem = consulta_pela_existencia_da_conta_origem != -1 && consulta_pela_existencia_da_conta_destino != -1;
        if (verificar_se_as_duas_contas_existem) {
            contaOrigem.transferir(contaDestino, valor_a_ser_transferido);
        }
    }
    renderJuros(numero_da_conta_poupanca) {
        let resultado_da_consulta_pela_conta = this.consultar(numero_da_conta_poupanca);
        //FAIL FAST 
        if (resultado_da_consulta_pela_conta == null) {
            return 0;
        }
        else if (resultado_da_consulta_pela_conta instanceof Poupanca == false) {
            return 0;
        }
        else {
            let saldo_da_conta_antes_dos_juros = resultado_da_consulta_pela_conta.getSaldo();
            let conta_convertida_para_poupanca = resultado_da_consulta_pela_conta.renderJuros();
            let valor_dos_juros = resultado_da_consulta_pela_conta.getSaldo() - saldo_da_conta_antes_dos_juros;
            return valor_dos_juros;
        }
    }
    contar_quantidade_de_contas() {
        return this.contas.length;
    }
    somar_saldo_de_todas_as_contas() {
        let soma_saldo = 0;
        for (const conta_atual of this.contas) {
            soma_saldo += conta_atual.getSaldo();
        }
        return soma_saldo;
    }
    calcular_media_dos_saldos_das_contas() {
        return this.somar_saldo_de_todas_as_contas() / this.contar_quantidade_de_contas();
    }
    getContas() {
        return this.contas;
    }
    setContas(novas_contas) {
        this.contas = novas_contas;
    }
    carregarDeArquivo() {
        const arquivo = fs.readFileSync(this.CAMINHO_ARQUIVO, 'utf-8');
        //const linhas: string[] = arquivo.split('\n');
        const linhas = arquivo.split('\r\n');
        console.log("Iniciando leitura de arquivo");
        for (let i = 0; i < linhas.length; i++) {
            let linhaConta = linhas[i].split(";");
            let conta;
            let tipo = linhaConta[3];
            if (tipo == 'C') {
                conta = new Conta(linhaConta[0], linhaConta[1], parseFloat(linhaConta[2]));
            }
            else if (tipo == 'CP') {
                conta = new Poupanca(linhaConta[0], linhaConta[1], parseFloat(linhaConta[2]), parseFloat(linhaConta[4]));
            }
            else if (tipo == 'CI') {
                conta = new ContaImposto(linhaConta[0], linhaConta[1], parseFloat(linhaConta[1]), parseFloat(linhaConta[4]));
            }
            this.inserir(conta);
            console.log(`Conta ${conta.getNumero()} carregada`);
        }
        /*
                linhas.forEach(linha => {
                    let linhaConta: string[] = linha.split(";");
                    let conta!: Conta;
                    let tipo: string  = linhaConta[2];
                    if (tipo == 'C') {
                        conta = new Conta(linhaConta[0], parseFloat(linhaConta[1]));
                    } else if (tipo == 'CP') {
                        conta = new Poupanca(linhaConta[0], parseFloat(linhaConta[1]),parseFloat(linhaConta[3]));
                    } else if (tipo == 'CI') {
                        conta = new ContaImposto(linhaConta[0], parseFloat(linhaConta[1]),parseFloat(linhaConta[3]));
                    }
        
                    this.inserir(conta);
                    console.log(`Conta ${conta.numero} carregada`);
                    
        
        
                });*/
        console.log("fim do arquivo");
    }
    salvarEmArquivo() {
        console.log("Iniciando a gravação de contas em arquivo.");
        let stringContas = "";
        let linha = "";
        for (let conta of this.contas) {
            if (conta instanceof Poupanca) {
                linha = `${conta.getNumero()};${conta.getNome()};${conta.getSaldo()};CP;${conta.getTaxaJuros()}\r\n`;
            }
            else if ((conta instanceof ContaImposto)) {
                linha = `${conta.getNumero()};${conta.getNome()};${conta.getSaldo()};CI;${conta.getTaxaImposto()}\r\n`;
            }
            else {
                linha = `${conta.getNumero()};${conta.getNome()};${conta.getSaldo()};C\r\n`;
            }
            stringContas += linha;
        }
        //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
        stringContas = stringContas.slice(0, stringContas.length - 2);
        fs.writeFileSync(this.CAMINHO_ARQUIVO, stringContas, 'utf-8');
        console.log("Contas salvas em arquivo.");
    }
}
/*

let banco=new Banco()
banco.inserir(new Conta("123","davi",100))
banco.inserir(new Conta("4","joao",200))
banco.inserir(new Conta("123","pedro",200))
console.log(banco)

console.log(`-----------------------------
Saldo Total
R$  ${banco.somar_saldo_de_todas_as_contas()}
conta(s) existente(s): ${banco.contar_quantidade_de_contas()} conta(s).
------------------------------------------
`)

*/
