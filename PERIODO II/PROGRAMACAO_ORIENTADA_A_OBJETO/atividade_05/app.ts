import prompt from "prompt-sync";
import {Banco} from "./Banco.js"
import {Conta} from "./Conta.js"
import {cadrastrar,consultar, excluir_conta, realizar_deposito, sacar, somar_dos_valores_das_contas_existentes} from './funcoes_auxiliares_app.js'



//criacao do input
let input = prompt();

//criacao do banco
let banco: Banco = new Banco();

//MENU DE OPCOES
let opcao: String = '';


            do {
            console.log('\nBem vindo\nDigite uma opção:');
            console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
            '4 - Depositar 5 - Excluir 6 - Transferir\n' +
            '7 – Totalizações' +
            '         0 - Sair\n');
            opcao = input("Opção:");
            
                switch (opcao) {
                    case "1":
                        cadrastrar(banco);
                    break

                    case "2":
                        let conta_pesquisada=consultar(banco);
                        console.log(conta_pesquisada)

                    case "3":
                        let id_conta_saque=input("Digite o id da conta: ")
                        let valor_saque=Number(input("Digite o valor do saque (R$): "))
                        sacar(banco,id_conta_saque,valor_saque)                                   
                    break

                    case "4":
                        let id_conta_deposito=input("Digite o id da conta: ")
                        let valor_deposito=Number(input("Digite o valor do deposito (R$): "))
                        sacar(banco,id_conta_deposito,valor_deposito)                                   
                    break

                    case "5":
                        let id_conta_a_ser_excluida=input("Digite o id da conta: ")
                        excluir_conta(banco,id_conta_a_ser_excluida)                                 
                    break

                    case "6":
                        let id_conta_origem=input("Digite o id da conta origem: ")
                        let id_conta_destino=input("Digite o id da conta destino: ")
                        let valor_a_ser_transferido=Number(input("Digite o valor a ser transferido (R$): "))

                        realizar_deposito(banco,id_conta_origem,id_conta_destino,valor_a_ser_transferido)
                                                
                    break

                    case "7":
                        console.log(`
                            Totalizacao dos valores (R$): ${somar_dos_valores_das_contas_existentes(banco)}
                        `)
                    break





            //...
            }
            input("Operação finalizada. Digite <enter>");
            } while (opcao != "0");
            console.log("Aplicação encerrada");



