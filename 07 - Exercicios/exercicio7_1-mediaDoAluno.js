/*
Programa que receba a média de um aluno.
- Média < 5 = Reprovado
- Média >=5 e < 7 = Recuperação
- Média >=7 = aprovado
*/

const { gets, print } = require('./exercicio7_1-funcoesAuxiliares-mediaDoAluno')

const quantidadeDeNotas = 5;
let soma = 0;

for (let i = 0; i < quantidadeDeNotas; i++) {
    const notas = gets();
    soma = soma + notas;
}

const media = soma / quantidadeDeNotas


function classificacao (media) {
    if (media < 5) {
        return 'reprovado'
    } else if (media >= 5 && media < 7) {
        return 'recuperação'
    } else {
        return 'aprovado'
    }
}


print(media);
print(classificacao(media));

