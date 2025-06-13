
const entradas = [2000, 250];

let i = 0; // contador de chamadas que começa no 0

function gets() {
    const nota = entradas[i];
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




