class Empregado{
   salario: number = 500;

   calcularSalario(): number { 
     return this.salario
   }
}

class Diarista extends Empregado {
   override calcularSalario(): number { 
       return super.calcularSalario()/30
   }
}

class Horista extends Diarista {
  override calcularSalario(): number { 
        return super.calcularSalario()/24
   }
}



