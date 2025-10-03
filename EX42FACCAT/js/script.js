let codigoFuncionario = parseInt(prompt("Digite o código do funcionário:"))
let anoNascFuncionario = parseInt(prompt("Digite o ano de nascimento:"))
let anoIngressoEmpresa = parseInt(prompt("Digite o ano de ingresso na empresa:"))
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascFuncionario
let anosEmpresa = anoAtual - anoIngressoEmpresa
if (anosEmpresa > idade) {
    alert("Golpe ao solicitar aposentadoria")
}
else if (idade > 64 || anosEmpresa > 29 || (idade > 59 && anosEmpresa > 24)) {
    alert("idade: " + idade + "\nAnos de empresa: " + anosEmpresa + "\nRequerer aposentadoria")
}
else {
    alert("Não requerer")
}