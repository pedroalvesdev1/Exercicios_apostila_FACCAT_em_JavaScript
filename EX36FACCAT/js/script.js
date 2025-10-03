let homemVelho = 0
let homemNovo = 0
let mulherVelha = 0
let mulherNova = 0
let somaHomemVelhoMulherNova = 0
let somaHomemNovoMulherVelha = 0

let homem1 = parseInt(prompt("Digite a idade do 1° homem:"))
let homem2 = parseInt(prompt("Digite a idade do 2° homem:"))
let mulher1 = parseInt(prompt("Digte a idade da 1° mulher:"))
let mulher2 = parseInt(prompt("Digte a idade da 2° mulher:"))

if (homem1 > homem2) {
    homemVelho = homem1
    homemNovo = homem2
} else {
    homemVelho = homem2
    homemNovo = homem1
}

if (mulher1 > mulher2) {
    mulherVelha = mulher1
    mulherNova = mulher2
} else {
    mulherVelha = mulher2
    mulherNova = mulher1
}

somaHomemNovoMulherVelha = homemNovo + mulherVelha
somaHomemVelhoMulherNova = mulherNova + homemVelho


alert("A soma das idades do homem mais velho com a mulher mais nova foi de " + somaHomemVelhoMulherNova)
alert("A soma das idades do homem mais novo com a mulher mais velha foi de " + somaHomemNovoMulherVelha)