let horaInicio = parseInt(prompt("Digite a hora do ínicio da partida:"))
let horaFinal = parseInt(prompt("Digite a hora do final da partida:"))
let duracao

if (horaFinal > horaInicio) {
    duracao = horaFinal - horaInicio
}
else {
    duracao = (24 - horaInicio) + horaFinal
}

alert("A duração da partida foi " + duracao + "h")