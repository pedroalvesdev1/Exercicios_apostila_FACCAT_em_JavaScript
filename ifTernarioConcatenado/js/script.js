let idade = parseInt(prompt("Digite sua idade:"))

let mensagem = (idade < 16) ? "Você não pode votar." : (idade < 18)? "Voto Opicional" : "Voto obrigatorio"
alert(mensagem)