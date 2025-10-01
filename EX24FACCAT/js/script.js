let salario = parseFloat(prompt("Digite o seu salaŕio: "))
let valorVendas = parseFloat(prompt("Digite o valor total das vendas:"))

if (valorVendas <= 1500){
   let acrescimo = (valorVendas * 3/100) 
   let salarioFinal = salario + acrescimo

   alert("O seu salrio junto da participção de vendas é R$ " + salarioFinal)
}
else{
   let acrescimo = (valorVendas * 5/100) 
   let salarioFinal = salario + acrescimo

   alert("O seu salrio junto da participção de vendas é R$ " + salarioFinal)
}
