
// Boolean
const camise1taAzul = true;
const camise2taAzul = false;

// Condicional
const numero = 10;

const eNumeroPar = (numero % 2) === 0;

console.log(eNumeroPar);

/* Sinais de "="
= Atribuição
== igualdade, mas ignora o tipo da variável '0' string | 0 Número
=== igualdade *** Mais utilizado. A boa prática é verifficar o tipo de outras formas
*/

// Se numeroPar = true
if (eNumeroPar) {
    console.log('Par')
}

// "!" é uma negação da condicional
if (!eNumeroPar) {
    console.log('Impar')
}

// else = senão
if (eNumeroPar) {
    console.log('Par')
} else {
    console.log('Impar')
}

// else if
const numero2 = 5;
const isNumeroDivisivelPor5 = (numero2 % 5) === 0; // Boa prática para variaveis boleanas é começar com is

if (numero2 === 0) {
    console.log('O número é inválido')
} else if (numero2 === 5) {
    console.log('O número é 5')
} else if (numeroDivisivelPor5) {
    console.log('sim');
} else {
    console.log('não');
}