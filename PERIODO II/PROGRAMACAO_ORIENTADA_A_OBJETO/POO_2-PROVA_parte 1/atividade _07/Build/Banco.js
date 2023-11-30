import { Conta, Poupanca, ContaImposto } from "./Conta.js";
import { CarregarArquivoError, ContaInexistenteError, PoupancaInvalidaError, SalvarEmArquivoError } from "./Excecoes.js";
import * as fs from 'fs';
export class Banco {
    contas = [];
    CAMINHO_ARQUIVO = "../contas.txt";
    constructor() {
    }
    inserir(conta) {
        try {
            let retorno_da_pesquisa_pelo_numero_da_conta = this.consultar(conta.getNumero());
        }
        catch (error) {
            this.contas.push(conta);
            console.log(`Conta cadastrada!!!`);
            //this.salvarEmArquivo()
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        if (contaProcurada == null) {
            throw new ContaInexistenteError("Conta nao encontrada!");
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
        if (indiceProcurado == -1) {
            throw new ContaInexistenteError("Conta nao encontrada!");
        }
        return indiceProcurado;
    }
    alterar(conta) {
        let indiceProcurado = this.consultarPorIndice(conta.getNumero());
        this.contas[indiceProcurado] = conta;
    }
    excluir(numero) {
        let indiceProcurado = this.consultarPorIndice(numero);
        for (let i = indiceProcurado; i < this.contas.length; i++) {
            this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
    }
    sacar(numero, valor) {
        let indiceProcurado = this.consultarPorIndice(numero);
        let conta = this.contas[indiceProcurado];
        conta.sacar(valor);
    }
    tranferir(contaOrigem, contaDestino, valor_a_ser_transferido) {
        //consulta pela existencia das contas
        let consulta_pela_existencia_da_conta_origem = this.consultarPorIndice(contaOrigem.getNumero());
        let consulta_pela_existencia_da_conta_destino = this.consultarPorIndice(contaDestino.getNumero());
        contaOrigem.transferir(contaDestino, valor_a_ser_transferido);
    }
    renderJuros(numero_da_conta_poupanca) {
        let resultado_da_consulta_pela_conta = this.consultar(numero_da_conta_poupanca);
        if (resultado_da_consulta_pela_conta instanceof Poupanca == false) {
            throw new PoupancaInvalidaError("A conta nao eh poupanca!!!");
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
        try {
            const arquivo = fs.readFileSync(this.CAMINHO_ARQUIVO, 'utf-8');
            if (arquivo != "") {
                const linhas = arquivo.split('\r\n');
                console.log("Iniciando leitura de arquivo");
                for (let i = 0; i < linhas.length; i++) {
                    let linhaConta = linhas[i].split(";");
                    let conta;
                    let tipo = linhaConta[3];
                    if (tipo == 'C') {
                        conta = new Conta(linhaConta[0], linhaConta[1], Number(linhaConta[2]));
                    }
                    else if (tipo == 'CP') {
                        conta = new Poupanca(linhaConta[0], linhaConta[1], Number(linhaConta[2]), Number(linhaConta[4]));
                    }
                    else if (tipo == 'CI') {
                        conta = new ContaImposto(linhaConta[0], linhaConta[1], Number(linhaConta[1]), Number(linhaConta[4]));
                    }
                    this.inserir(conta);
                    console.log(`Conta ${conta.getNumero()} carregada`);
                }
                console.log("fim do arquivo");
                //const linhas: string[] = arquivo.split('\n');
            }
        }
        catch (error) {
            throw new CarregarArquivoError("Erro ao carregar o arquivo!!!");
        }
    }
    salvarEmArquivo() {
        try {
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
        catch (error) {
            throw new SalvarEmArquivoError("Erro ao salvar os dados no arquivo!!!");
        }
    }
}
