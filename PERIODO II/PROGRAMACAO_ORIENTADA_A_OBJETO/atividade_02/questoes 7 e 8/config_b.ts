/*
allowUnreachableCode--> codico inacessivel

Quando:

     indefinido (padrão) fornece sugestões como avisos aos editores
     verdadeiro código inacessível é ignorado
     false gera erros do compilador sobre código inacessível

*/

function fn(n: number) {
    if (n > 5) {
      return true;
    } else {
      return false;
    }
    return true;
  }