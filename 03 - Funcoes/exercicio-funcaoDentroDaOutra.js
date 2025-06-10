// para funções, nomeie com verbos de ação

function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;   
}

function verificarMaiorIdade(idade) {
    if (idade < 18) {
        return 'Menor de idade';
        // console.log('Menor de idade');
    } else  {
        return 'Maior de idade';
        // console.log('Maior de idade');
    }
}

console.log(escrevaMeuNome("Ludson") + verificarMaiorIdade(19));