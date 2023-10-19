import prompt from "prompt-sync";
import {Banco} from "./Banco.js"
import {Conta} from "./Conta.js"
import {cadrastrar,carregar_os_dados_a_partir_do_arquivo,consultar, depositar, excluir_conta, realizar_deposito, render_juros_em_uma_conta_poupanca, sacar, salvar_os_dados_no_arquivo, somar_dos_valores_das_contas_existentes} from './funcoes_auxiliares_app.js'



//criacao do input
let input = prompt();

//criacao do banco
let banco: Banco = new Banco();

//MENU DE OPCOES
let opcao: String = '';



            do {
            console.log(` 
            >>>>>>>>>>>>>>Bem vindo<<<<<<<<<<<< 
            -Digite uma opção:
            
            `)
            console.log(`
            1 - Cadastrar 
            2 - Consultar 
            3 - Sacar
            4 - Depositar 
            5 - Excluir 
            6 - Transferir
            7 – Totalizações
            8-Render Juros
            9-Salvar em arquivo
            10-Carregar arquivo
            0 - Sair  \n`)
            opcao = input("Opção:");
            
                switch (opcao) {
                    case "1":
                        cadrastrar(banco);
                    break

                    case "2":
                        let controle_pesquisa_de_contas:boolean=true
                        while(controle_pesquisa_de_contas){
                            let conta_pesquisada=consultar(banco);
                            if(conta_pesquisada==null){
                                console.log(`Não existe uma conta com esse numero!!! \n`)  
                            }
                            else{
                                console.log(conta_pesquisada)
                                console.log("\n")
                            }

                            let pergunta=Number( input(`\n deseja pesquisar novamente? (1-SIM 0-NAO): \n`) )

                            if (pergunta==1) continue
                            else controle_pesquisa_de_contas=false
                                
                        }
                        

                        break;
                    case "3":
                        let id_conta_saque=input("Digite o id da conta: ")
                        let valor_saque=Number(input("Digite o valor do saque (R$): "))
                        sacar(banco,id_conta_saque,valor_saque)                                   
                    break

                    case "4":
                        let id_conta_deposito=input("Digite o id da conta: ")
                        let valor_deposito=Number(input("Digite o valor do deposito (R$): "))
                       depositar(banco,id_conta_deposito,valor_deposito)                                 
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
                    case "8":
                        let numero_conta=input("Digite o numero da conta poupanca que sera aplicado os juros: ")
                        //FAIL FAST
                        if(render_juros_em_uma_conta_poupanca(banco,numero_conta)==0){
                            console.log(`Não foi possivel render juros na conta de numero ${numero_conta} !!!!`)
                        }
                        else{
                            console.log(`Operacao de render juros na conta de numero ${numero_conta} foi realizada com sucesso!!!`)
                        }


                    break
                    case "9":
                        salvar_os_dados_no_arquivo(banco)
                    break

                    case "10":
                        carregar_os_dados_a_partir_do_arquivo(banco)
                    break

                    case "0":
                        salvar_os_dados_no_arquivo(banco)
                    break
                    

            //...
            }
            input("Operação finalizada. Digite <enter>");
            } while (opcao != "0");
            console.log("Aplicação encerrada");



