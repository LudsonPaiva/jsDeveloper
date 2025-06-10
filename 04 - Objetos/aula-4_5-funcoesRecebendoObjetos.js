
/*Objeto:
- agrupa valores
- coleção dinâmica de chave e valor

objeto literal é quaando abrimos e fechamos colchetes ()

Métodos = Função dentro de um objeto
*/

// Classe = uma ddefinião do que poderia ser
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    // é o que acontece quando uma classe é instanciada.
    // sempre que estiver no construtor será obrigatório
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    // quando formos declarar um metódo não precisamos escrever a palavra funcion
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function comparaPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho do que ${p2.nome}`)
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho do que ${p1.nome}`)
    } else {
        console.log(`${p2.nome} tem a mesma idade que ${p1.nome}`)
    }
}

const ludson = new Pessoa('ludson', 42);
const lilian = new Pessoa('lilian', 36);

comparaPessoas(ludson, lilian);