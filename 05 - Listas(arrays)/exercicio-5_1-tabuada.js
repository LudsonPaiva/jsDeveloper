
const tabuada =[]

const valor = 2;

// a tabuada geralmente começa em 1
// i++ significa que ele vai iterar de 1 em 1
for (let i = 1; i <= 10; i++) {
    const resultado = valor * i;
    tabuada.push(resultado);    
}
console.log(tabuada);

// forma simples sem array
for (let i = 1; i <= 10; i++) {
    console.log(i*valor);    
}
