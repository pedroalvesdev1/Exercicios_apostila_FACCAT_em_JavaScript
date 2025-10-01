let quantMacas = parseInt(prompt("Digite o número de maças:"))
let precoFinal = 0

if (quantMacas < 12) {
    precoFinal = quantMacas * 1.30
}
else
{
    precoFinal= quantMacas * 1
}

alert("O preço das maças é R$" + precoFinal)