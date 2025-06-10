
// funções que não devolvem nada são chamadas de procedimentos. Não tem "return"

//declaração de função
function sayMyName(name) {
    console.log('Your name is:' + name);
}
//referenciar uma função
sayMyName('Renan');
sayMyName('Vitor');

//declaração de função
function quadrado(valor) {
    return valor * valor;
}
//referenciar uma função
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

//declaração de função
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo
}
//referenciar uma função
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));