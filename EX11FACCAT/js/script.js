let salarioFixo = parseFloat(prompt("Digite valor do salário fixo:"))
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas do vendedor:"))
let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"))
let valorCarroVendido = parseFloat(prompt("Digite o valor que o vendedor recebe por carro vendido"))

let salarioFinal = salarioFixo +
    ((valorTotalVendas * 5) / 100) +
    (valorCarroVendido * numeroCarrosVendidos)

alert("O valor do seu salário final é R$" + salarioFinal)