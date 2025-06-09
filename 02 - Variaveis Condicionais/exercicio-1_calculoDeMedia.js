/*1) Faça um algoritmo que dado 3 notas tiradas por um aluno, em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 10;
let nota2 = 7;
let nota3 = 9;

let mediaDoAluno = (nota1 + nota2 + nota3)/ 3;
if (mediaDoAluno < 5) {
    console.log(`Reprovado | Média: ${mediaDoAluno.toFixed(2)}`);
} else if (mediaDoAluno >= 5 & mediaDoAluno <=7) {
    console.log(`Recuperação | Média: ${mediaDoAluno.toFixed(2)}`)
} else {
    console.log(`Aprovado | Média: ${mediaDoAluno.toFixed(2)}`)
}

