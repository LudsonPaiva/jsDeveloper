
notasDoAluno = [5, 8, 10, 6, 3]

let i = 0; // contador de chamadas que começa no 0

function gets() {
    const nota = notasDoAluno[i];
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




