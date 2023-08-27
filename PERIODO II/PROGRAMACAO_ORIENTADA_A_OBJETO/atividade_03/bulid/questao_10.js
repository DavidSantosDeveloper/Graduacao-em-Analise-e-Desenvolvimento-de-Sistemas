"use strict";
/*
10. Resolva o problema abaixo usando Map/Reduce e Objetos JavaScript com a
sintaxe TypeScript.

Processamento Avançado de Dados de Sensores em

uma Rede de Sensores IoT

Você faz parte de uma equipe de engenheiros responsáveis por processar
dados provenientes de uma vasta rede de sensores IoT (Internet of Things) instalados
em uma cidade inteligente. Cada sensor coleta informações sobre vários parâmetros
ambientais, como temperatura, umidade, níveis de poluição e ruído. A cada minuto, os
sensores enviam um conjunto de leituras para serem processados e agregados.
O desafio é criar um sistema de processamento de dados que consolide as
leituras dos sensores em estatísticas úteis, como a média, o máximo e o mínimo para
cada parâmetro ambiental em intervalos de tempo específicos. Além disso, é
necessário aplicar calibrações diferentes para cada sensor, que podem variar a cada
hora. Os dados brutos chegam em forma de um array de objetos, onde cada objeto
contém informações sobre o sensor, o tipo de leitura (temperatura, umidade, etc.), o
valor da leitura e o carimbo de data/hora.
Seu objetivo é criar um programa que utilize as funções map e reduce para
processar esses dados brutos e gerar um relatório detalhado que apresente
estatísticas agregadas para cada parâmetro ambiental, levando em consideração as

calibrações específicas de cada sensor e os intervalos de tempo desejados (por
exemplo, a cada hora).
Por fim, você deve produzir uma estrutura de dados que contenha os seguintes
resultados:
• Média das leituras;
• Valor máximo registrado;
• Valor mínimo registrado.


 */
let dados_brutos_dos_sensores_iot = [
    {
        tipoDoSensor: "temperatura",
        infoDoSensor: "normal",
        valorDaLeitura: 30,
        carimboHorario: "26/08/2023 16:35"
    },
    {
        tipoDoSensor: "temperatura",
        infoDoSensor: "com problemas",
        valorDaLeitura: 20,
        carimboHorario: "27/08/2023 08:35"
    },
    {
        tipoDoSensor: "umidade",
        infoDoSensor: "normal",
        valorDaLeitura: 25,
        carimboHorario: "26/08/2023 16:35"
    },
    {
        tipoDoSensor: "umidade",
        infoDoSensor: "com problemas",
        valorDaLeitura: 75,
        carimboHorario: "27/08/2023 08:35"
    },
    {
        tipoDoSensor: "poluicao",
        infoDoSensor: "normal",
        valorDaLeitura: 80,
        carimboHorario: "27/08/2023 16:35"
    },
    {
        tipoDoSensor: "poluicao",
        infoDoSensor: "com problemas",
        valorDaLeitura: 40,
        carimboHorario: "27/08/2023 08:35"
    },
    {
        tipoDoSensor: "ruidos",
        infoDoSensor: "normal",
        valorDaLeitura: 200,
        carimboHorario: "26/08/2023 16:35"
    },
    {
        tipoDoSensor: "ruidos",
        infoDoSensor: "com problemas",
        valorDaLeitura: 40,
        carimboHorario: "27/08/2023 08:35"
    }
];
let tempo_de_calibracao = [];
//filtrar os dados dos sensores de temperatura
let dados_sensores_de_temperatura = dados_brutos_dos_sensores_iot.filter((sensor_atual) => {
    if (sensor_atual.tipoDoSensor == "temperatura") {
        return sensor_atual;
    }
});
//calcular os dados estatisticos dos sensores de temperatura
let numerador_media_temperatura = dados_sensores_de_temperatura.reduce((sensor_em_memoria, sensor_atual) => {
    return sensor_em_memoria + sensor_atual.valorDaLeitura;
}, 0);
let media_temperatura = numerador_media_temperatura / dados_sensores_de_temperatura.length;
let maior_temperatura = dados_sensores_de_temperatura.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura > valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, -Infinity);
let menor_temperatura = dados_sensores_de_temperatura.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura < valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, +Infinity);
//filtrar os dados dos sensores de umidade
let dados_sensores_de_umidade = dados_brutos_dos_sensores_iot.filter((sensor_atual) => {
    if (sensor_atual.tipoDoSensor == "umidade") {
        return sensor_atual;
    }
});
//calcular os dados estatisticos dos sensores de umidade
let numerador_media_da_umidade = dados_sensores_de_umidade.reduce((sensor_em_memoria, sensor_atual) => {
    return sensor_em_memoria + sensor_atual.valorDaLeitura;
}, 0);
let media_umidade = numerador_media_da_umidade / dados_sensores_de_umidade.length;
let maior_umidade = dados_sensores_de_umidade.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura > valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, -Infinity);
let menor_umidade = dados_sensores_de_umidade.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura < valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, +Infinity);
//filtrar os dados dos sensores de poluicao
let dados_sensores_de_poluicao = dados_brutos_dos_sensores_iot.filter((sensor_atual) => {
    if (sensor_atual.tipoDoSensor == "poluicao") {
        return sensor_atual;
    }
});
//calcular os dados estatisticos dos sensores de poluicao
let numerador_media_poluicao = dados_sensores_de_poluicao.reduce((sensor_em_memoria, sensor_atual) => {
    return sensor_em_memoria + sensor_atual.valorDaLeitura;
}, 0);
let media_poluicao = numerador_media_poluicao / dados_sensores_de_poluicao.length;
let maior_poluicao = dados_sensores_de_poluicao.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura > valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, -Infinity);
let menor_poluicao = dados_sensores_de_poluicao.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura < valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, +Infinity);
//filtrar os dados dos sensores de ruidos
let dados_sensores_de_ruidos = dados_brutos_dos_sensores_iot.filter((sensor_atual) => {
    if (sensor_atual.tipoDoSensor == "ruidos") {
        return sensor_atual;
    }
});
//calcular os dados estatisticos dos sensores de poluicao
let numerador_media_ruidos = dados_sensores_de_ruidos.reduce((sensor_em_memoria, sensor_atual) => {
    return sensor_em_memoria + sensor_atual.valorDaLeitura;
}, 0);
let media_ruidos = numerador_media_ruidos / dados_sensores_de_ruidos.length;
let maior_ruidos = dados_sensores_de_ruidos.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura > valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, -Infinity);
let menor_ruidos = dados_sensores_de_ruidos.reduce((valor_em_memoria, sensor_atual) => {
    if (sensor_atual.valorDaLeitura < valor_em_memoria) {
        valor_em_memoria = sensor_atual.valorDaLeitura;
        return valor_em_memoria;
    }
    return valor_em_memoria;
}, +Infinity);
//Estrutura de dados criada
let ed = {
    sensorDeTemperatura: {
        media: media_temperatura,
        maiorNumero: maior_temperatura,
        menorNumero: menor_temperatura
    },
    sensorDeUmidade: {
        media: media_umidade,
        maiorNumero: maior_umidade,
        menorNumero: menor_umidade
    },
    sensorDePoluicao: {
        media: media_poluicao,
        maiorNumero: maior_poluicao,
        menorNumero: menor_poluicao
    },
    sensorDeRuidos: {
        media: media_ruidos,
        maiorNumero: maior_ruidos,
        menorNumero: menor_ruidos
    }
};
console.log(dados_brutos_dos_sensores_iot);
console.log("-------------------filtragem---------------");
console.log("########### temperatura");
console.log(dados_sensores_de_temperatura);
console.log("########### umidade");
console.log(dados_sensores_de_umidade);
console.log("########### poluicao");
console.log(dados_sensores_de_poluicao);
console.log("########### ruidos");
console.log(dados_sensores_de_ruidos);
console.log("---------RESULT-------------------");
console.log(ed);
