let num1 = parseInt(prompt("Digite o 1° número:"))
let num2 = parseInt(prompt("Digite o 2° número:"))
let num3 = parseInt(prompt("Digite o 3° número:"))
let inicio
let meio
let fim

if (num1 < num2) {
    if (num2 < num3) {
        inicio = num1
        meio = num2
        fim = num3
    }

} else if (num2 < num3) {
    if (num3 < num1) {
        inicio = num2
        meio = num3
        fim = num1
    }
} else if (num3 < num1) {
    if (num1 < num2) {
        inicio = num3
        meio = num1
        fim = num2
    }
}

alert(inicio + "," + meio + "," + fim) 