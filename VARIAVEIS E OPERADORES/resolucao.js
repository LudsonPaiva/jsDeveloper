

// Variáveis de entrada
let precoCombustivel = 5.79;
let kmPorLitro = 10;
const distanciaPercorrida = 100;

// Variáveis lógicas
let gastoKm = precoCombustivel / kmPorLitro;
let gastoViagem = gastoKm * distanciaPercorrida;

// To fixed = converte o valor para texto e 2 são números após a casa decimal
console.log(gastoViagem.toFixed(2)) 