import { SituacaoFinanceira } from "./SituacaoFinanceira.js";
let situacao_financeira = new SituacaoFinanceira(1000, 300);
console.log("situacao financeira: " + JSON.stringify(situacao_financeira));
console.log(`valor credito: R$ ${situacao_financeira.getValorCreditos()}`);
console.log(`valor debito: R$ ${situacao_financeira.getvalorDebitos()}`);
console.log(`valor saldo: R$ ${situacao_financeira.saldo()}`);
