

function verificarMaiorIdade(idade) {
    if (idade < 18) {
        return 'Menor de idade';
        // console.log('Menor de idade');
    } else  {
        return 'Maior de idade';
        // console.log('Maior de idade');
    }
}

// verificarMaiorIdade(19);
console.log(verificarMaiorIdade(19));