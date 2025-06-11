

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    // por estar interno ao objeto, em vez de passar, usamos o this
    imc() {
        return this.peso / Math.pow(this.altura,2)
    }

    calculaIMC() {
        const imc = this.imc(this.peso, this.altura);
        if (imc < 18.8){
            console.log(`Peso: ${imc.toFixed(2)} | Abaixo do peso`)
        } else if (imc >= 18.8 && imc< 25) {
            console.log(`Peso: ${imc.toFixed(2)} | Peso normal`)
        } else if (imc >= 25 && imc< 30) {
            console.log(`Peso: ${imc.toFixed(2)} | Acima do peso`)
        } else if (imc >= 30 && imc< 40) {
            console.log(`Peso: ${imc.toFixed(2)} | Obeso`)
        } else {
            console.log(`Peso: ${imc.toFixed(2)} | Obesidade grave`)
        }
    }
}

const ludson = new Pessoa('Ludson', 70, 1.73);
ludson.calculaIMC();
console.log(ludson)


