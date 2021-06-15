// DESAFIO AULA 03 FUNÇÕES
// node DH_PI_Desafio_Aula03.js

//Exercício 1
console.log('----------------------------------')
console.log('Exercicio 1')
function imcCalc(peso, altura){
    return peso/(altura**2)
}

console.log()
console.log('Valor do IMC: ')
console.log(imcCalc(61, 1.59).toFixed(2))
console.log('----------------------------------')

// Exercio 2
console.log('Exercicio 2')

let somar = function (num1, num2){
    return num1 + num2
}
console.log("O valor da soma: ")
console.log(somar(2,2))


let sub = function (num1, num2){
    return num1 - num2
}
console.log("O valor da subtração: ")
console.log(sub(2,2))

let mult = function (num1, num2){
    return num1 * num2
}
console.log("O valor da multiplicação: ")
console.log(mult(2,2))

let div = function (num1, num2){
    return num1 / num2
}
console.log("O valor da divisão: ")
console.log(div(2,2))
console.log()
console.log('----------------------------------')

// Exercicio 3
console.log()
console.log('Exercicio 3')

let nomeJogador
let golsJogador = 0
let precoEmDolares = 0

let fazerGol = function()
    {golsJogador = golsJogador+1
    precoEmDolares = precoEmDolares+10000
    return console.log('Golll!!! Número: '+ golsJogador +' Preço do jogador no mercado: '+precoEmDolares)
    }

fazerGol()
fazerGol()
fazerGol()


//Exercicio 4
console.log()
console.log('Exercicio 4')

let hatTrick = function()
    {fazerGol()
     fazerGol()
     fazerGol()
     precoEmDolares = precoEmDolares*1.1
     return console.log('Novo valor do jogador por ano: '+precoEmDolares)
    }

hatTrick()