// Calcule o preco do produto

// A vista Débito = 10% de desconto
// A vista no Dinheiro ou Pix = 15% de desconto
// Em duas vezes = Preço normal e sem juros
// > 2x = Preço normal e 10% de juros

condicaoPagamento = 1;
formaPagamento = 1;
parcelas = 2;
preco = 100;

/*
Condição de pagamento:
1 = A vista
2 = Parcelado

Forma de pagamento:
1 = Débito
2 = Dinheiro ou PIX
*/

if ((condicaoPagamento === 1) && (formaPagamento === 1)) {
    valorPago = preco * 0.9;
} else if ((condicaoPagamento === 1) && (formaPagamento === 2)) {
    valorPago = preco * 0.85;
} else if ((condicaoPagamento === 2) && (parcelas=== 2)) {
    valorPago = preco;
} else if ((condicaoPagamento === 2) && (parcelas > 2)) {
    valorPago = preco * 1.1;
} else {
    console.log("Opção não definida");
}

console.log(valorPago.toFixed(2));