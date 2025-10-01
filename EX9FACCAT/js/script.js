let salarioAtual = parseFloat(prompt("Digite o valor do seu salário atual:"))
let valorReaguste = parseFloat(prompt("Digite O valor do percentual de reajuste:"))

let salarioReajustado = salarioAtual + ((salarioAtual / 100) * valorReaguste)

alert("O seu novo salário é " + salarioReajustado)