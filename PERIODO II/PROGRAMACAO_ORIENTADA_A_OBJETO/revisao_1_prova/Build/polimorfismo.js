import { Funcionario } from "./Funcionario.js";
import { FuncionarioCLT } from "./FuncionarioCLT.js";
import { Estagiario } from "./Estagiario.js";
let funcionario = new Funcionario("fco", new Date(2001, 10, 23, 9, 10, 0, 0), 1300);
let emp_CLT = new FuncionarioCLT("david", new Date(2023, 10, 12, 5, 0, 0, 0), 1500, "1234-5");
let emp_Estagiario = new Estagiario("frac. david satos sousa", new Date(2023, 10, 12, 5, 0, 0, 0), 3000, "ADS");
let lista_de_funcionarios = [funcionario, emp_CLT, emp_Estagiario];
let funcionario2 = funcionario;
if (funcionario2 instanceof Funcionario) {
    console.log(funcionario2);
    console.log(funcionario2.getCurso());
}
