let quantMaxima = parseInt(prompt("Digite a quantidade máxima do produto em estoque:"))
let quantMinima = parseInt(prompt("Digite a quantidade miníma do produto em estoque:"))
let quantAtual = parseInt(prompt("Digite a quantidade atual do produto em estoque:"))

let mediaEstoque = (quantMaxima  + quantMinima) /2

if(quantAtual > mediaEstoque){
    alert("Não efetue a compra.")
}
else{
    alert("Efetue a compra.")
}