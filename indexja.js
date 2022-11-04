
//-pedir o preço de um produto; ou indicar alguns produtos com os preços e pedir
//para escolher

let preço = Number(prompt('qual e o preço do produto desejado?'))

//-perguntar se o usuario deseja pagar a vista ou parcelado

console.log('de que forma deseja fazer o pagamento?')
console.log('(1) a vista')
console.log('(2) parcelar (em ate 6 vezes)')
let formadepagamento = Number(prompt('de que forma deseja fazer o pagamento? \n (1) a vista \n (2) parcelar (em ate 6 vezes)'))
let preçofinal, numeroparcelas
//-caso escolha pagar a vista, o preço do produto tera um desconto de 10%
//(ex: 1000 --> 900)

if (formadepagamento == 1) {
    let desconto = preço * 0.1
    preçofinal = preço - desconto
}

//-caso escolher parcelar, perguntar em quantas vezes (2 ate 6)

else if (formadepagamento == 2) {
    numeroparcelas = Number(prompt('deseja parcelar em quantas vezes? (2 a 6)'))

    //-o preço tera um acrescimo de 1,5% vezes a quantidade de parcelas
    //(ex: 1000, 2 vezes --> 15*2=1030)
    let acrescimo = preço * numeroparcelas * 0.015
    preçofinal = preço + acrescimo
}


//-exibir no final a forma de pagamento e o preço final

if (formadepagamento == 1) (
    console.log('pagamento a vista')

)

else if (formadepagamento == 2) (
    console.log("parcelado em", numeroparcelas, "vezes")
)

console.log('preço final sera', preçofinal)

//propt(), number (), console.log()




