let nomeProduto = prompt("Digite o nome do produto: ")
let quantProduto = parseInt(prompt("Digite a quantidade do produto: "))
let precoProduto = parseFloat(prompt("Digite o valor do produto:"))
let desconto = 0

let subtotal = quantProduto * precoProduto

if (quantProduto <= 5) {
    desconto = subtotal * 2 / 100
} else if (quantProduto > 5 && quantProduto <= 10) {
    desconto = subtotal * 3 / 100
} else if (quantProduto > 10) {
    desconto = subtotal * 5 / 100
}

let total = subtotal - desconto
alert("Você ganhou um desconto de R$" + desconto + ". Você deve pagar R$" + total) 