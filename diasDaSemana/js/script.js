let diaDaSemana = parseInt(prompt("Digite um número de 1 á 7: "))

switch(diaDaSemana){
    case 1:
        alert("Domingo")
        break
    case 2:
        alert("Segunda-Feira")
        break
    case 3:
        alert("Treça-Feira")
        break
    case 4:
        alert("Quarta-Feira")
        break
    case 5:
        alert("Quinta-Feira")
        break
    case 6:
        alert("Sexta-Feira")
        break
    case 7:
        alert("Sábado")
        break
    default:
        alert("Número inválido: digite um número de 1 á 7.")
        break
}