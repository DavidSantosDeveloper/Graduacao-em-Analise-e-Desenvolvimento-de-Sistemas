### Round Robin

>>>>ATENCAO: A ORDEM DE EXECUCAO DE CADA TAREFA EH DEFINIDA VIA ALTERAÇÃO MANUAL DA ORDEM DE INSERÇÃO DAS TAREFAS NA LISTA

##### EXEMPLO:
>>>> OBJETO TAREFA 1 (INGRESSO NO TEMPO 10)
>>>>>OBJETO TAREFA 2 (INGRESSO NO TEMPO 5)
>>>>>OBJETO TAREFA 3 (INGRESSO NO TEMPO 20)

>>>>CONSIDERANDO O TEMPO EM QUE CADA TAREFA INGRESSOU NA MEMORIA RAM , A FILA DO ROUND ROBIN FICA ASSIM:

[OBJETO TAREFA 2,OBJETO  TAREFA 1,OBJETO TAREFA 3]

##### EXEMPLO 2 (PARA CASOS ONDE HA INGRESSOS NO MESMO TEMPO NA MEMORIAUSE O CRITERIO QUE TIVER MENOR NUMERO VAI PRIMEIRO.POR  EXEMPLO, ENTRE T3 E T2,T2 VAI SER EXECUTADO PRIMEIRO QUE T3 PORQUE 2 EH MENOR QUE 3 ): 
>>>> OBJETO TAREFA 1 (INGRESSO NO TEMPO 10)
>>>>>OBJETO TAREFA 2 (INGRESSO NO TEMPO 5)
>>>>>OBJETO TAREFA 3 (INGRESSO NO TEMPO 5)

>>>>CONSIDERANDO O TEMPO EM QUE CADA TAREFA INGRESSOU NA MEMORIA RAM , A FILA DO ROUND ROBIN FICA ASSIM:

[OBJETO TAREFA 2,OBJETO  TAREFA 3,OBJETO TAREFA 1]



