let nome = prompt("Digite seu nome: ")
let altura = parseFloat(prompt("Digite sua altura:"))
let sexo = prompt("Digite seu sexo [M] Masculino ou [F] Feminino:").toUpperCase()
let pesoIdeal

if (sexo == "M") {
    pesoIdeal = (72.7 * altura) - 58
    alert("Sr." + nome + " seu peso ideal é " + pesoIdeal.toFixed(2))
}
else if (sexo == "F") {
    pesoIdeal = (62.1 * altura) - 44.7
    alert("Sra." + nome + " seu peso ideal é " + pesoIdeal.toFixed(2))
}
else {
    alert("Erro sexo invalido.")
}
