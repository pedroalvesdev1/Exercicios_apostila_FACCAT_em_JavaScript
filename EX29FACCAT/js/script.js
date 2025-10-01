let numero1 = parseInt(prompt("Digite o 1° número:"))
let numero2 = parseInt(prompt("Digite o 2° número:"))
let numero3 = parseInt(prompt("Digite o 3° número:"))
let menor
let resultado
let soma

if(numero1 < numero2 && numero1 < numero3){
    menor = numero1
}
else if(numero2 < numero1 && numero2 < numero3){
    menor = numero2
}
else {
    menor = numero3
}

soma = numero1 + numero2 + numero3
resultado = soma - menor

alert("A soma dos 2 maiores números são " + resultado)