
numeros = [5, 3, 4, 1, 10, 8]

let i = 0; // contador de chamadas que começa no 0

function gets() {
    const nota = numeros[i];
    i++;
    return nota;
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets,
    print
};




