let ladoA = parseFloat(prompt("Digite o valor do lado A: "))
let ladoB = parseFloat(prompt("Digite o valor do lado B: "))
let ladoC = parseFloat(prompt("Digite o valor do lado C: "))
let mensagem

if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
    mensagem = "Triângulo Equilátero"
    if ((ladoA == ladoB) || (ladoB == ladoC) || (ladoA == ladoC)) {
        mensagem = "Triângulo Isósceles"
    }
    else {
        mensagem = "Triângulo Escaleno"
    }
}
else {
    mensagem = "Não é possível formar um triângulo"
}

alert(mensagem)
