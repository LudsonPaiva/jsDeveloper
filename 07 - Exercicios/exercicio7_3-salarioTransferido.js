/*
Programa que calcule e imprima o salário a ser transferido para um funcionário.
- Receba o valor bruto + os beneficios
- salario a ser transferido = valor bruto do salário - % de imposto mediante a faixa salarial + benefícios

Faixa de imposto
<= 1100.00 = 5%
> 1100.00 && <= 2500.00 = 10%
> 2500.00 = 15%
*/

const { gets, print } = require('./exercicio7_3-funcoesAuxiliares-salarioTransferido')

const salarioBruto = gets();
const beneficios = gets();
imposto = calculaImposto(salarioBruto);

salarioLiquido = salarioBruto - imposto + beneficios;

function calculaImposto(salarioBruto) {
    if (salarioBruto <= 1100.00) {
        return salarioBruto * 0.05;
    } else if (salarioBruto > 1100.00 && salarioBruto <= 2500.00) {
        return salarioBruto * 0.1;
    } else {
        return salarioBruto * 0.15;
    }
}


print(`O Salário bruto é: ${salarioBruto}`);
print(`O imposto a ser pago é: ${imposto}`);
print(`Os benefícios recebidos são: ${beneficios}`);
print(`O Salário líquido ficou em: ${salarioLiquido}`);

