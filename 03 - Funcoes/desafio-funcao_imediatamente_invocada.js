// no javascript as funções podem ser manipuladas como valor

function calcularImc(peso, altura){
    return peso / Math.pow(altura,2) // elevando a 2 pela classe Math e função pow
}

function classificarImc(imc) {
    if (imc < 18.8){
        return `Abaixo do peso`;
    } else if (imc >= 18.8 && imc< 25) {
        return `Peso normal`;
    } else if (imc >= 25 && imc< 30) {
        return `Acima do peso`;
    } else if (imc >= 30 && imc< 40) {
        return `Obeso`;
    } else {
        return `Obesidade grave`;
    }
}

//função imediatamente invocada é quando a inserimos entre parenteses. Ela será executada na frente das demais.
// não precisamos chamar mais a função como no exemplo, não teria o "main()"

// (function main(){
//     const peso = 70;
//     const altura = 1.73;

//     const imc = calcularImc(peso, altura);
//     console.log(imc);
//     console.log(classificarImc(imc));
// })();

//função anônima é utilizada quando precisamos dela apenas uma vez. Ela não pode ser reutilizada
(function (){
     const peso = 70;
     const altura = 1.73;

     const imc = calcularImc(peso, altura);
     console.log(imc);
     console.log(classificarImc(imc));
})();





