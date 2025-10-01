let horasTrabalhadas = parseInt(prompt("Digite quantas horas você trabalhou:"))
let valorHoraTrabalhada = parseFloat(prompt("Digite o valor da hora trabalhada:"))
let salario

if(horasTrabalhadas <= 160){
    salario = horasTrabalhadas * valorHoraTrabalhada
}
else{
    salario = (horasTrabalhadas * valorHoraTrabalhada) +  ((valorHoraTrabalhada / 100) * 50)
}
alert("O seu salário é R$"+salario)