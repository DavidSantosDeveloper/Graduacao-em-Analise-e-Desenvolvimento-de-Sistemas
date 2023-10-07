import {Conta} from "./Conta.js"


export class Banco {
   private contas: Conta[] = []

    public inserir(conta: Conta): void {
        let retorno_da_pesquisa_pelo_numero_da_conta=this.consultar(conta.getNumero())
       
       console.log(retorno_da_pesquisa_pelo_numero_da_conta)
       if(retorno_da_pesquisa_pelo_numero_da_conta==null){
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

    public consultar(numero: string): Conta {
        let contaProcurada!: Conta;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero() == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }

        return contaProcurada;
    }

    private consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].getNumero()== numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    public alterar(conta: Conta): void {
        let indiceProcurado: number =
                this.consultarPorIndice(conta.getNumero());
        
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    }

    public excluir(numero: string): void {
        let indiceProcurado = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
            
        }
    }

    public sacar(numero: string, valor: number): void {
        let indiceProcurado: number = this.consultarPorIndice(numero);

        if (indiceProcurado != -1) {
            let conta: Conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    }

    public tranferir(contaOrigem:Conta,contaDestino:Conta,valor_a_ser_transferido:number){
        //consulta pela existencia das contas
        let consulta_pela_existencia_da_conta_origem=this.consultarPorIndice(contaOrigem.getNumero())
        let consulta_pela_existencia_da_conta_destino=this.consultarPorIndice(contaDestino.getNumero())
       
        //verifica se as 2 contas existem ao mesmo tempo
        let verificar_se_as_duas_contas_existem:boolean=consulta_pela_existencia_da_conta_origem!=-1 && consulta_pela_existencia_da_conta_destino!=-1 
        
        if(verificar_se_as_duas_contas_existem){
           contaOrigem.transferir(contaDestino,valor_a_ser_transferido)
            
        }
    }

    public contar_quantidade_de_contas():number{
        return this.contas.length
    }

    public somar_saldo_de_todas_as_contas(): number{
        let soma_saldo:number=0

        for (const conta_atual of this.contas) {
            soma_saldo+=conta_atual.getSaldo()
        }

        return soma_saldo
    }

    public calcular_media_dos_saldos_das_contas():number{

        return this.somar_saldo_de_todas_as_contas() / this.contar_quantidade_de_contas()
    }


    public getContas(){
        return this.contas
    }
    public setContas(novas_contas:Conta[]){
        this.contas=novas_contas
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
