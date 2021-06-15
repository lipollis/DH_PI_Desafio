// ARROW FUNCTION
//node DH_PI_Desafio_Aula07.js

console.log('----------------------------------')
console.log('Arrow Function')
//Transformando funções
// function print(mensagem){
//     console.log(mensagem)
// }

// print('Olá, bom dia')

// function soma(n1,n2){
//     return n1 + n2
// }
// console.log(soma(10,10))

let print=mensagem => 'Olá, bom dia'
console.log(print())

let soma=(n1,n2) => n1 + n2
console.log(soma(10,10))
console.log()

//---------------------------------------------
console.log('----------------------------------')
console.log('Callback')

function acaoCarro(acao){
    console.log(acao)
}
function andar() {
    let mensagem_a = 'O carro está andando'
    acaoCarro(mensagem_a) //callback
}
function parar() {
    let mensagem_p = 'O carro parou'
    acaoCarro(mensagem_p) //callback
}
andar()
parar()

console.log()