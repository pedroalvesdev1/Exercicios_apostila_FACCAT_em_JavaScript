let ladoA = parseFloat(prompt("Digite o 1° lado:"))
let ladoB = parseFloat(prompt("Digite o 2° lado:"))
let ladoC = parseFloat(prompt("Digite o 3° lado:"))
//10
//20
//10


if (ladoA < ladoB + ladoC) {
    if (ladoB < ladoA + ladoC) {
        if (ladoC < ladoA + ladoB)
            alert("Sim, é um triângulo")
    }
}
else {
    alert("Não, é um triângulo")
}