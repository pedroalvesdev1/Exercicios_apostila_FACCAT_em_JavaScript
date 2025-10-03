let valorX = parseFloat(prompt("Digite um valor: "))
let valorY = parseFloat(prompt("Digite outro valor: "))

let valorZ = (valorX * valorY) + 5
let resposta

if(valorZ <= 0){
    resposta = "A"
}else if(valorZ <= 100){
    resposta = "B"
}else {
    resposta = "C"
}

alert(valorZ + " " +resposta)