// exercicio01.ts

/* 1) Crie uma função chamada "exibirCor" que aceite:
- nome da pessoa (obrigatório)
- cor preferida da pessoa (opcional)

Atenção: o parâmetro cor deve ser do tipo Cor e aceitar somente 5 cores. */
type Cor = "vermelho" | "azul" | "verde" | "amarelo" | "roxo";

// Versão 1: usando parâmetro opcional e tratando com condicional
/* function exibirCor(nome: string, cor?: Cor): string {
    if (cor) {
        return `Olá ${nome}, cor escolhida foi ${cor}`;
    }
    return `Olá ${nome}, você não escolheu uma cor.`;
} */

// Versão 2:
function exibirCor(nome: string, cor: Cor = "vermelho"): string {
  return `Olá ${nome}, a cor é ${cor}`;
}

/* 2) Chame a função pelo menos 2x:
- Na primeira, passe o nome e uma cor (das possíveis)
- Na segunda, passe somente o nome */
console.log(exibirCor("Alana", "amarelo"));
console.log(exibirCor("Heloisa"));
