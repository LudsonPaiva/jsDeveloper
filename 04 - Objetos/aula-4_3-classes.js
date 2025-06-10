
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

    // quando formos declarar um metódo não precisamos escrever a palavra funcion
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//Instância é uma ocorrência de uma classe

const ludson = new Pessoa();
ludson.nome = 'Ludson Paiva';
ludson.idade = 42;

const lilian = new Pessoa();
lilian.nome = 'Lilian Paiva';
lilian.idade = 36;

console.log(ludson);
console.log(lilian);

ludson.descrever();
lilian.descrever();

