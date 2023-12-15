class Tarefa {
  constructor(nome, ingresso, duracao, prioridade) {
    this.nome = nome
    this.ingresso = ingresso
    this.duracao = duracao
    this.prioridade = prioridade
    this.tempo_restante = duracao

    this.tempoDeVida=0
    this.tempoDeEspera=0
    this.intervalos_de_execucao=[]
  }
}

class RoundRobin {
  constructor(tarefas, quantum,troca_de_contexto) {
    this.tarefas = tarefas
    this.quantum = quantum
    this.troca_de_contexto=troca_de_contexto
  }

  
calcular_tempo_de_vida_da_tarefa_atual(nome_da_tarefa,tempo_de_encerramento){
    //Busca e registra o valor do tempo de vida da tarefa procurada
    for(let tarefa_atual of this.tarefas){
         if(tarefa_atual.nome==nome_da_tarefa){
            tarefa_atual.tempoDeVida=tempo_de_encerramento- tarefa_atual.ingresso
         }
    }
 }

  calcular_tempo_de_espera_da_tarefa_atual(nome_da_tarefa){
    //Busca e registra o valor do tempo de espera da tarefa procurada
    for(let tarefa_atual of this.tarefas){
         if(tarefa_atual.nome==nome_da_tarefa){
            
             //calcula  o tempo de espera com base nos intervalos de execucao da tarefa atual
             let  indice_atual=0
             for(let intervalo_atual of tarefa_atual.intervalos_de_execucao){
                 //formula: tempo do inicio - tempo de chegada na memoria RAM
                 if(indice_atual==0){
                    tarefa_atual.tempoDeEspera+= tarefa_atual.intervalos_de_execucao[0].tempo_de_inicio -tarefa_atual.ingresso  
                 }
                 //formula: tempo do inicio do intervalo de execucao atual - tempo de encerramento do intervalo anterior
                 else{
                    tarefa_atual.tempoDeEspera+=tarefa_atual.intervalos_de_execucao[indice_atual].tempo_de_inicio - tarefa_atual.intervalos_de_execucao[indice_atual-1].tempo_de_encerramento
                 } 
                indice_atual++ 
             }

         }
    }
 }
  registrar_intervalo_de_execucao_da_tarefa_atual(nome_da_tarefa,tempo_de_inicio,tempo_de_encerramento){
    //Busca e registra o valor do intervalo de execucao da tarefa procurada
    for(let tarefa_atual of this.tarefas){
         if(tarefa_atual.nome==nome_da_tarefa){
            tarefa_atual.intervalos_de_execucao.push({tempo_de_inicio:tempo_de_inicio,tempo_de_encerramento:tempo_de_encerramento})
         }
    }
 }
  executar() {
    let tempo_total = 0;
    let tempo_inicial_de_cada_tarefa=0
    let fila = [...this.tarefas]
   
    while (fila.length > 0) {
      const tarefa = fila.shift()
      const tempo_executado = Math.min(this.quantum, tarefa.tempo_restante)

      tarefa.tempo_restante -= tempo_executado
      tempo_inicial_de_cada_tarefa=tempo_total
      tempo_total += tempo_executado+this.troca_de_contexto

      
      console.log(`Tempo Inicio -> ${tempo_inicial_de_cada_tarefa}  Tempo Final -> ${tempo_total-this.troca_de_contexto}: ${tarefa.nome} (Restante: ${tarefa.tempo_restante})`)
      
      //Se a tarefa for a ultima nao sera  mostrada msg de troca de Contexto.
      if(fila.length!=0){
          console.log(`Tempo de troca de contexto (${this.troca_de_contexto})...`)
      }
      //Verifica se processo terminou
      if (tarefa.tempo_restante > 0) {
        fila.push(tarefa)
        this.registrar_intervalo_de_execucao_da_tarefa_atual(tarefa.nome,tempo_inicial_de_cada_tarefa, tempo_total-this.troca_de_contexto)
      }
      //Processo terminou,calcular Tempo de Vida e de Espera da Tarefa Atual
      else{
          this.registrar_intervalo_de_execucao_da_tarefa_atual(tarefa.nome,tempo_inicial_de_cada_tarefa, tempo_total-this.troca_de_contexto)
          this.calcular_tempo_de_vida_da_tarefa_atual(tarefa.nome,(tempo_total-this.troca_de_contexto) )
          this.calcular_tempo_de_espera_da_tarefa_atual(tarefa.nome)
      }
    }
     
    //Mostrar tempo medio de vida das tarefas.
    const media_de_vida_tarefas= this.tarefas.reduce( (soma, tarefa_atual) => soma +tarefa_atual.tempoDeVida, 0) / this.tarefas.length;
    console.log(`\n >>>>>Tempo de medio de vida dos processos : ${media_de_vida_tarefas} `)
    //Mostrar tempo medio de espera das tarefas.
    const media_de_espera_tarefas= this.tarefas.reduce( (soma, tarefa_atual) => soma +tarefa_atual.tempoDeEspera, 0) / this.tarefas.length;
    console.log(`\n >>>>>Tempo de medio de espera dos processos : ${media_de_espera_tarefas} `)
  }
}


const t1 = new Tarefa("t1", 5, 10, 4)
const t2 = new Tarefa("t2", 15, 30, 2)
const t3 = new Tarefa("t3", 10, 20, 1)
const t4 = new Tarefa("t4", 0, 40, 3)

const quantum=15
const troca_de_contexto=4
const escalonador = new RoundRobin([t4, t1, t3, t2],quantum,troca_de_contexto)

escalonador.executar()
