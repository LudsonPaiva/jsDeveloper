// Calcule o preco do produto

// A vista Débito = 10% de desconto
// A vista no Dinheiro ou Pix = 15% de desconto
// Em duas vezes = Preço normal e sem juros
// > 2x = Preço normal e 10% de juros

// condicaoPagamento = 1;
// formaPagamento = 1;
// parcelas = 2;
// preco = 100;

/*
Condição de pagamento:
1 = A vista
2 = Parcelado

Forma de pagamento:
1 = Débito
2 = Dinheiro ou PIX
*/

function calculaPreco(condicaoPagamento, formaPagamento, parcelas, preco){
    if ((condicaoPagamento === 1) && (formaPagamento === 1)) {
        return valorPago = preco * 0.9;
    } else if ((condicaoPagamento === 1) && (formaPagamento === 2)) {
        return valorPago = preco * 0.85;
    } else if ((condicaoPagamento === 2) && (parcelas=== 2)) {
        return valorPago = preco;
    } else if ((condicaoPagamento === 2) && (parcelas > 2)) {
        return valorPago = preco * 1.1;
    } else {
        return console.log("Opção não definida");
    }
}

console.log(calculaPreco(2, 1, 3, 100).toFixed(2));