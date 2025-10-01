let numeroConta = parseInt(prompt("Digite o número da sua conta:"))
let saldo = parseFloat(prompt("Digite o valor do saldo:"))
let debito = parseFloat(prompt("Digite o valor do débito"))
let credito = parseFloat(prompt("Digite o valor do seu crédito:"))

let saldoAtual = (saldo - debito) + credito

if(saldo >= 0){
    alert("Seu saldo está positivo com R$" + saldoAtual)
}
else{
    alert("Seu saldo está negativo com R$" + saldoAtual)
}