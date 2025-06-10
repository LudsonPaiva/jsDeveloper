
class Carro {
    marca;
    cor;
    gastoMedioDeCombustivel;

    //construtor
    constructor(marca, cor, gastoMedioDeCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDeCombustivel = gastoMedioDeCombustivel;
    }

    //método
    calculaCusto (tamanhoPercurso, valorCombustivel) {
        return (valorCombustivel/ this.gastoMedioDeCombustivel) * tamanhoPercurso;
    }
}

const gol = new Carro('Gol', 'preto', 13);
const kwid = new Carro('kwid', 'azul', 15);

const distancia = 100;
const precoCombustivel = 5.15;
//array
const Carros = [gol, kwid];

Carros.forEach(Carro => {
    const custo = Carro.calculaCusto(distancia, precoCombustivel);
    console.log(`O ${Carro.marca} gastará ${custo.toFixed(2)} para percorrer ${distancia} kms`);
});