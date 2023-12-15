class Banqueiro{
    constructor(recursos_existentes,recursos_disponiveis_atualmente,matriz_alocacao_corrente,matriz_requisicao){
        this.recursos_existentes=recursos_existentes
        this.recursos_disponiveis_atualmente=recursos_disponiveis_atualmente
        this.matriz_alocacao_corrente=matriz_alocacao_corrente
        this.matriz_requisicao=matriz_requisicao    
    }

    executar(){
        

       
    }
    alocar_recursos_para_os_processos(){
        let ocorreu_deadlock=false

        while(ocorreu_deadlock==false){
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>📋 ANALISE DAS REQUISICOES 📋<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
            let algum_processo_foi_atendido=false

            let processo_atual=1
            for (const requisicao_atual of this.matriz_requisicao) {
                if(this.verificar_se_eh_seguro_alocar_recursos_para_um_processo(requisicao_atual)){
                   console.log(`Processo ${processo_atual} recebeu os recursos e esta executando!`)
                   console.log(`Processo ${processo_atual} terminou e liberou recursos.\n`)
                   this.liberar_recursos_de_um_processo_que_terminou(processo_atual)
                   this.remover_uma_requisicao_que_foi_concluida(processo_atual) 
                   algum_processo_foi_atendido=true
    
                }
                else{
                    console.log(`EM ESPERA: Processo ${processo_atual}`)   
                }
                processo_atual++
            }

            if(algum_processo_foi_atendido==false && this.matriz_requisicao.length>0){
                
                ocorreu_deadlock=true
                console.log("Deadlock!!!!")
                console.log("\n\n\n")
                console.log(`╔═════════════════════════════════════════════════════════════════════════════╗`)
                console.log(`                    ⚠️ ATENCAO!!!!!  OCORREU DEADLOCK !!!! ⚠️                                           `)
                console.log(`╚═════════════════════════════════════════════════════════════════════════════╝`)
            }
            else if(this.matriz_requisicao.length==0){
                console.log("\n\n\n")
                console.log(`╔═════════════════════════════════════════════════════════════════════════════╗`)
                console.log(`  >>>>>>TODOS OS PROCESSOS FORAM EXECUTADOS COM SUCESSO! 😊😊😊`)
                console.log(`╚═════════════════════════════════════════════════════════════════════════════╝`)
                break
            }
        }
        
    }
    verificar_se_eh_seguro_alocar_recursos_para_um_processo(requisicao_atual){
        let tipos_de_recursos_nescessarios=requisicao_atual.length
        let indice_atual=0
        
        console.log("\n ⚪ ______REQUISICAO ATUAL______:")
        console.log(requisicao_atual)

        for (const recurso_atual of requisicao_atual) {
            console.log(`Existe Recurso ${indice_atual+1} nescessario:  => ${recurso_atual<=recursos_disponiveis_atualmente[indice_atual]}`)
            //para cada tipo de recurso,verifica se ha recursos que sejam suficientes para atender a requisicao do processo
            if(recurso_atual<=recursos_disponiveis_atualmente[indice_atual]){
                tipos_de_recursos_nescessarios--;
            }    
            indice_atual++      
        }
        console.log(`tipos restantes para ser atendido: ${tipos_de_recursos_nescessarios}\n\n`)
        //CONFIRMA SE HA RECURSOS DISPONIVEIS PARA ATENDER A REQUISICAO
        if(tipos_de_recursos_nescessarios==0){
            console.log("_________________________________________________________")
            console.log("|REQUISICAO ATENDIDA                                    |")
            console.log(`|➡️    A REQUISICAO [${requisicao_atual}] DO PROCESSO ${this.matriz_requisicao.indexOf(requisicao_atual)+1}              |`)
            console.log("_________________________________________________________\n\n")
            return true
        }
        else{
            // se um tipo de recurso nao for suficiente pra atender a requisicao,NAO EH SEGURO alocar recursos!
            return false
        }
    }
    remover_uma_requisicao_que_foi_concluida(numero_do_processo_atual){
        let lista_atualizada=[]
        let indice_atual=0
        for (const requisicao_atual of this.matriz_requisicao) {
            //SE A POSICAO ATUAL EH DIFERENTE DA QUE QUERO REMOVER,COPIO ELA PARA A LISTA ATUALIZADA
            if(indice_atual!=numero_do_processo_atual-1){
                lista_atualizada.push(requisicao_atual)
            }
            indice_atual++
        }
        this.matriz_requisicao=lista_atualizada
        

    }
     liberar_recursos_de_um_processo_que_terminou(numero_do_processo_atual){
        
        let recursos_que_ja_estavam_alocados=[]
        let recursos_da_requisicao=[]
        let recursos_liberados=[]
        // LIBERA OS RECURSOS DO PROCESSO QUE ESTAVAM ALOCADOS NO INICIO DA EXECUCAO 
        let indice_atual=0       
        for (const processo_atual of this.matriz_alocacao_corrente) {
            if(indice_atual==numero_do_processo_atual-1){
                  let indice_do_recurso_atual=0
                  for (let recurso_atual of processo_atual) {

                       //ADICIONA O RECURSO LIBERADO A LISTA DE RECURSOS DISPONIVEIS ATUALMENTE (somando)
                       recursos_disponiveis_atualmente[indice_do_recurso_atual] = recursos_disponiveis_atualmente[indice_do_recurso_atual]+ recurso_atual
                       //APOS A LIBERACAO, O RECURSO EH ZERADO NA LISTA DE ALOCACAO CORRENTE!
                       processo_atual[indice_do_recurso_atual]=0
                      indice_do_recurso_atual++
                  }
            }
            indice_atual++
        }

         // LIBERA OS RECURSOS DA REQUISICAO DO PROCESSO
        let indice=0
         for (const processo_atual of this.matriz_requisicao) {
             if(indice==numero_do_processo_atual-1){
                   let indice_do_recurso_atual=0
                   for (let recurso_atual of processo_atual) {
                        //ADICIONA O RECURSO LIBERADO PARA A  LISTA DE RECURSOS DISPONIVEIS ATUALMENTE (somando)
                        recursos_disponiveis_atualmente[indice_do_recurso_atual] = recursos_disponiveis_atualmente[indice_do_recurso_atual]+ recurso_atual
                       //APOS A LIBERACAO, O RECURSO EH ZERADO NA LISTA DE ALOCACAO CORRENTE!
                        processo_atual[indice_do_recurso_atual]=0
                       indice_do_recurso_atual++
                   }
             }
              indice++
         }
         console.log("########### MATRIZ DE REQUISICAO ATUALIZADA ###########")
         console.log(matriz_requisicao)
         console.log("########### MATRIZ DE ALOCACAO CORRENTE ATUALIZADA ###########")
         console.log(matriz_alocacao_corrente)
         console.log("########### MATRIZ DE RECURSOS DISPONIVEIS  ATUALIZADA ###########")
         console.log(recursos_disponiveis_atualmente)
         console.log("\n\n")
     }
     
 }

//                      R1-DVD   R2-WEBCAM   R3-IMPRESSORA  R4-BLU-RAY 
let recursos_existentes=[4,2,3,1]

//                                R1   R2   R3  R4 
let recursos_disponiveis_atualmente=[2,1,0,0]

                            /*    R1   R2   R3  R4 
                                P1|                  |
                                P2|                  |
                                P3|                  |

*/
let matriz_alocacao_corrente=[
                                [0,0,1,0] ,
                                [2,0,0,1],
                                [0,1,2,0]
]


let matriz_requisicao=[
                                [2,0,0,1] ,
                                [1,0,1,0],
                                [2,1,0,0]
]


let banqueiro=new Banqueiro(recursos_existentes,recursos_disponiveis_atualmente,matriz_alocacao_corrente,matriz_requisicao)
banqueiro.alocar_recursos_para_os_processos()



