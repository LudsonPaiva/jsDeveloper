// Calculo do imc

// imc = peso / (altura * altura)

const peso = 70;
const altura = 1.73;
const imc = peso / Math.pow(altura,2) // elevando a 2 pela classe Math e função pow

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