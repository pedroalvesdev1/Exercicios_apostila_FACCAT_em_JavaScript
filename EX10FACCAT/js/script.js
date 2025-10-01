let custoFabrica = parseFloat(prompt("Digite o valor de custo de fábrica:"))
let percentualDistribuidor = 28
let percentualImpostos = 45

let valorConsumidor = custoFabrica
    + ((custoFabrica * percentualDistribuidor) / 100)
    + ((custoFabrica * percentualImpostos) / 100)

alert("O custo final para o consumidor é: R$" + valorConsumidor)