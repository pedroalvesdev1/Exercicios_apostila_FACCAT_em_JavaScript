let nota1 = parseFloat(prompt("Digite o valor da 1° nota:"))
let nota2 = parseFloat(prompt("Digite o valor da 2° nota:"))

let media = ((nota1 + nota2) / 2)

if (media >= 6){
    alert("O aluno foi aprovado com nota " + media)
}
else
{
    alert("O aluno foi reprovado com nota " + media)
}