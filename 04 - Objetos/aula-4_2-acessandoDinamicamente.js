
/*Objeto:
- agrupa valores
- coleção dinâmica de chave e valor

objeto literal é quaando abrimos e fechamos colchetes ()

Métodos = Função dentro de um objeto
*/

const ludson = {
    nome: 'Ludson Paiva',
    idade: 42,

    //Método
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

const atributo = 'idade';

// acessando de forma mais dinâmica
console.log(ludson[atributo])

ludson['nome'] = 'teste'; // acessando de forma dinâmica
ludson.nome = 'teste' // acessanddo de forma direta