/*
Programa que receba N quantidade de numeros.
- Imprima o maior número par e o menor número impar
*/

const { gets, print } = require('./exercicio7_2-funcoesAuxiliares-maiorPar_menorImpar')

const numeros = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < numeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        };
    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        };
    };
}

print(`O maior número par é: ${maiorPar}`);
print(`O menor número impar é: ${menorImpar}`);

