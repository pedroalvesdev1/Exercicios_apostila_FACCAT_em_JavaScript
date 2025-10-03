let quantMacas = parseFloat(prompt("Digite o quantos quilo de maçãs:"))
let quantMorangos = parseFloat(prompt("Digite o quantos quilo de morangos:"))
let valorMorango = 0
let valorMacas = 0
let desconto = 0

if (quantMacas <= 5) {
    valorMacas = 1.80   
}
else {
    valorMacas = 1.50
}

if (quantMorangos <= 5) {
    valorMorango = 2.50
}
else {
    valorMorango = 2.20
}

let subtotal = (valorMacas * quantMacas) + (valorMorango * quantMorangos)
let totalKg = quantMacas + quantMorangos

if (totalKg >= 8) {
    desconto = subtotal * 10/100
    subtotal = subtotal - desconto
} else if (subtotal > 25) {
    desconto = subtotal * 10 / 100
    subtotal = subtotal - desconto
}

alert("Você deve pagar R$" + subtotal)