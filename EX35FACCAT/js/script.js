let litros = parseFloat(prompt("Digite quantos litros você abasteceu: "))
let tipoCombustivel = prompt("Digite o A para Álcool e G para Gasolina: ").toUpperCase()
let mensagemPagamento = "Você deve pagar R$ "

if (tipoCombustivel == "A") {
    let valorAlcool = parseFloat(prompt("Digite o valor por litro do álcool: "))
    if (litros <= 20) {
        let subtotal = litros * valorAlcool
        let desconto = valorAlcool * 3 / 100
        let valorTotal = subtotal - desconto
        alert(mensagemPagamento + valorTotal.toFixed(2))
    }
    else {
        let subtotal = litros * valorAlcool
        let desconto = valorAlcool * 5 / 100
        let valorTotal = subtotal - desconto
        alert(mensagemPagamento + valorTotal.toFixed(2))
    }
}
else if (tipoCombustivel == "G") {
    let valorGasolina = parseFloat(prompt("Digite o valor por litro da Gasolina: "))
    if(litros <= 20){
        let subtotal = litros * valorGasolina
        let desconto = valorGasolina * 4/100 
        let valorTotal = subtotal - desconto
        alert(mensagemPagamento + valorTotal)
    }
    else{
        let subtotal = litros * valorGasolina
        let desconto = valorGasolina * 6/100
        let valorTotal = subtotal - desconto
        alert(mensagemPagamento + valorTotal)
    }

}