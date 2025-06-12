

/* For: existe para percorrer a lista. ex.: 0 à 10 vezes

- "let index = 0" = (Declaração) Variável de controle, a vez em que está a repetição do for geralmente troca-se o "index" por "i"

- "index < array.length" = (Condicional) estrutura condicional para entrar neste for. Ex: i < 10

- "index++" = (Ação) o que acontece quando terminar de executar o for

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

//exemplo
for (let i = 0; i < 10; i++) {
    console.log(i); 
}

// exemplo: contar as letras de um nome
const nome = 'Ludson Fernando Dias de Paiva';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// versão 2
for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}