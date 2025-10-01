var numeroVotosEmBranco = parseInt(prompt("Digite o número de votos em branco:"))
var numeroVotosNulos = parseInt(prompt("Digite o número de votos nulos: "))
var numeroVotosValidos = parseInt(prompt("Digite o número de votos válidos: "))
var totalVotos = numeroVotosEmBranco + numeroVotosNulos + numeroVotosValidos

var percentualVotosEmBranco = (numeroVotosEmBranco/totalVotos) * 100
var percentualVotosNulos = (numeroVotosNulos/totalVotos) * 100
var percentualVotosValidos = (numeroVotosValidos/totalVotos) * 100 

alert("O percentual de votos em branco é " + percentualVotosEmBranco + "%" +
    "\nO percentual de votos nulos é " + percentualVotosNulos + "%" +
    "\nO percentual de votos válidos é " + percentualVotosValidos + "%"
)