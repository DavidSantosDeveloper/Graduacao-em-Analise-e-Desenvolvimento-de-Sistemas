import { Circulo } from "./Circulo.js";

let circulo:Circulo=new Circulo(4)

console.log("circulo referente: "+JSON.stringify( circulo)  )
console.log("perimetro: "+circulo.calcularArea())
console.log("area: "+circulo.calcularPerimetro())