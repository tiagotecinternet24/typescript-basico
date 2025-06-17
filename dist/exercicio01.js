"use strict";
function exibirCor(nome, cor = "vermelho") {
    return `Olá ${nome}, a cor é ${cor}`;
}
console.log(exibirCor("Alana", "amarelo"));
console.log(exibirCor("Heloisa"));
