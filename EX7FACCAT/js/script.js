var idadeAnos = parseInt(prompt("Digite sua idade em anos : "))
var idadeMeses = parseInt(prompt("Digite os meses : "))
var idadeDias = parseInt(prompt("Digite os dias : "))

var idadeEmDias = (idadeAnos * 365) + (idadeMeses * 30) + idadeDias

alert("Sua idade em dias é " + idadeEmDias)