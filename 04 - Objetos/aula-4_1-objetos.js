
/*Objeto:
- agrupa valores
- coleção dinâmica de chave e valor

objeto literal é quaando abrimos e fechamos colchetes ()

Métodos = Função dentro de um objeto
*/

const pessoa = {
    nome: 'Ludson Paiva',
    idade: 42,

    //Método
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

// incrementando chaves valores no objeto
pessoa.altura = 1.73;

//deletando
delete pessoa.idade;

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa)

pessoa.descrever();

// Alterando o objeto

pessoa.nome = 'Lilian';
pessoa.idade = 36

pessoa.descrever();

// Alterando a função dentro do objeto
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever();