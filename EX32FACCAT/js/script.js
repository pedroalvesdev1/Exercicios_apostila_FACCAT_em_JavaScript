let timeA = prompt("Digite o nome do 1° time")
let golsTimeA = parseInt(prompt("Digite o número de gols que o 1° time marcou:"))
let timeB = prompt("Digite o nome do 2° time")
let golsTimeB = parseInt(prompt("Digite o número de gols que o 2° time marcou:"))

if(golsTimeA > golsTimeB){
    alert("Time " + timeA + "ganhou com " + golsTimeA + " gols")
}
else if(golsTimeB > golsTimeA){
    alert("Time " + timeB + "ganhou com " + golsTimeB + " gols")
}
else{
    alert("EMPATE")
}