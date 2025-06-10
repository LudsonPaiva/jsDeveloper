
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

//Instância é uma ocorrência de uma classe

const ludson = new Pessoa('ludson', 42);
const lilian = new Pessoa('lilian', 36);

ludson.descrever();
lilian.descrever();

console.log(ludson);

