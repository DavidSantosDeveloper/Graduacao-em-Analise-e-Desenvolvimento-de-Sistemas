class Horario{
    private hora:number
    private minutos:number
    private segundos:number

    constructor(hora:number,minutos:number,segundos:number){
        this.hora=hora
        this.minutos=minutos
        this.segundos=segundos
    }
    // ATRIBUTOS  HORAS
    getHora(){
        return this.hora
    }
    setHora(novo_hora:number){
        this.hora=novo_hora
    }

     // ATRIBUTOS  MINUTOS
    geMinutos(){
        return this.minutos
    }
    setMinutos(novo_minutos:number){
        this.hora=novo_minutos
    }

     // ATRIBUTOS  SEGUNDOS
    getSegundos(){
        return this.segundos
    }
    setSegundos(novo_segundos:number){
        this.hora=novo_segundos
    }


    public retornarHorario():string{
        return `${this.hora}:${this.minutos}:${this.segundos}`
    }



}


let relogio=new Horario(15,30,50)


console.log("____________>>>>>>>>>>>>>RELOGIO TIC TOC<<<<<<<<______________")
console.log(relogio)

console.log(`######   HORA => ${relogio.getHora()}h`)
console.log(`######   MINUTOS => ${relogio.geMinutos()}min`)
console.log(`######   SEGUNDOS => ${relogio.getSegundos()}s`)

console.log(`######   HORARIO ATUAL: => ${relogio.retornarHorario()}`)

