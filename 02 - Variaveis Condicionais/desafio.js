/*Faça um programa para calcular o valor de uma Viagem.

Você terá 5 variáveiss. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no carro;
4 - Gasto médio de combustível
5 - Distância em KM da viagem

Imprima no console o que será gasto
*/

let precoEtanol = 4;
let precoGasolina = 5;
const consumoEtanol = 10;
const consumoGasolina = 13;
const distancia = 100;

// Etanol = 1 | Gasolina = 2
const combustivel = 3;

if (combustivel === 1) {
    precoCombustivel = precoEtanol
    consumoCombustivel = consumoEtanol
} else if (combustivel === 2) {
    precoCombustivel = precoGasolina
    consumoCombustivel = consumoGasolina
} else {
    console.log('Numero Inválido')
}

consumoPorKm = precoCombustivel / consumoCombustivel
custoDaViagem = consumoPorKm * distancia

console.log(custoDaViagem.toFixed(2))