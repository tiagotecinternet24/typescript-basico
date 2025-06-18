import { separador } from "./modulos";

// 05-arrays.ts
export {};

// Sintaxe 1
const bandas: Array<string> = ["Metallica", "Slayer", "Iron Maiden"];
// bandas.push(10); // erro
bandas.push("Nightwish");
console.log(bandas);

// Sintaxe 2
const artistas: string[] = ["Jon Oliva", "Sting", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);

separador();

// Arrays com tipos mistos ou combinados
const pessoas: (string | number)[] = ["Tiago", 28, "Maria", 45];
console.log(pessoas);

separador();

// Matriz tipada
const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

separador();

// Mini-exercícios
// 1) Crie um array de números
const numeros: number[] = [10, 50, 1000, 266, 78];

// 2) Calcule a soma de todos os elementos e guarde numa variável

// Versão tipada implicitamente (mais concisa)
// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// Versão tipada explicitamente (mais verbosa)
const total: number = numeros.reduce(
  (acumulador: number, numero: number): number => acumulador + numero,
  0
);

// 3) Mostre o resultado da soma
console.log(total);
