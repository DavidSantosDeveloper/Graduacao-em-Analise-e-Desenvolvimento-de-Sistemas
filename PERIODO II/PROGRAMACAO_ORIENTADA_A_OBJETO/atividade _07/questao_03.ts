class Calculadora{
    private numero1:number
    private numero2:number

    constructor(numero1:number,numero2:number){
        this.numero1=numero1
        this.numero2=numero2
    }

    public somar(){
        return this.numero1+this.numero2;
    }
    public subtrair(){
        return this.numero1-this.numero2;
    }
    public multiplicar(){
        return this.numero1*this.numero2;
    }
    public dividir(){
        return this.numero1/this.numero2;
    }

    public getNumero1():number{
        return this.numero1;
    }
    public setNumero1(novo_numero:number):void{
      this.numero1=novo_numero;
    }

    public getNumero2():number{
        return this.numero2;
    }
    public setNumero2(novo_numero:number):void{
      this.numero2=novo_numero;
    }

}


class CalculadoraCientifica extends Calculadora{

    public exponenciar(): number{
        return this.getNumero1()**this.getNumero2()
    }
}

let calc=new CalculadoraCientifica(1,2);

console.log("____________>>>>>>>>>>>>>CALCULADORA CIENTIFICA<<<<<<<<______________")
console.log(calc)

console.log(`######   SOMA => ${calc.somar()}`)
console.log(`######   SUBTRACAO => ${calc.subtrair()}`)
console.log(`######   MULTIPLICACAO => ${calc.multiplicar()}`)
console.log(`######   DIVIDIR => ${calc.dividir()}`)
console.log(`######   EXPONENCIAÇÃO => ${calc.getNumero1()}**${calc.getNumero2()} == ${calc.exponenciar()}`)







export {}