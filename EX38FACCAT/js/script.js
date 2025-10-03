let usuario = parseInt(prompt("Digite seu usuário:"))
let usuarioCorreto = 1234
let senhaCorreta = 9999
let senha

if (usuario != usuarioCorreto) {
    alert("Usuário inválido!")
}
else {
    senha = parseInt(prompt("Digite sua senha:"))
    if (senha != senhaCorreta) {
        alert("Senha incorreta")
    }
    else {
        alert("Acesso permitido")
    }
}