let nota1 = parseFloat(prompt("Digite o valor da 1° nota:"))
let nota2 = parseFloat(prompt("Digite o valor da 2° nota:"))
let nota3 = parseFloat(prompt("Digite o valor da 3° nota:"))

let mediaExercicios = parseFloat(prompt("Digite a média de exercícios:"))

let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7

let conceito

if (mediaAproveitamento >= 9) {
    conceito = "A"
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
    conceito = "B"
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
    conceito = "C"
} else if (mediaAproveitamento < 6) {
    conceito = "D"
}

alert("O aluno recebeu o conceito " + conceito)