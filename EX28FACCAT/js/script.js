let numero1 = parseInt(prompt("Digite o 1° número:"))
let numero2 = parseInt(prompt("Digite o 2° número:"))
let numero3 = parseInt(prompt("Digite o 3° número:"))

let maior

if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1
}
else if(numero2 > numero1 && numero2 > numero3){
    maior = numero2
}
else{
    maior = numero3
}

alert("O maior número é " + maior)