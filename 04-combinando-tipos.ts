import { separador } from "./modulos";

// 04-combinando-tipos.ts
export {};

/* Union Types */

// União de tipos literais
let direcao: "esquerda" | "direita"; // valores possíveis
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

// Criando um novo tipo combinando outros tipos existentes
type NumeroOuTexto = number | string;
let exemploA: NumeroOuTexto = 2112;
let exemploB: NumeroOuTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

// Criando um novo type com tipos literais
type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "inativo";
let situacaoAluno3: Status = "pendente";

console.log("Situação 1:" + situacaoAluno1);
console.log("Situação 2:" + situacaoAluno2);
console.log("Situação 3:" + situacaoAluno3);

separador();
