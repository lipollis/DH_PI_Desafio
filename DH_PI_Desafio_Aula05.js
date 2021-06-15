// DESAFIO AULA 05 ARRAY
// node DH_PI_Desafio_Aula05.js

//Exercício 1
//Encontrar a segunda posição do array
console.log('----------------------------------')
console.log('Exercicio 1')

let filmes = ["star wars","clube da luta","o poderoso chefao","top gun","interestelar"]

filmes[1]
console.log()
console.log("Filmes:")
console.log(filmes[1])
console.log()

//Colocar todos os elementos do array em letra maiuscula
console.log('----------------------------------')
console.log('Exercicio 2')

filmesUp = filmes.map(name => name.toUpperCase());

console.log("Filmes UP:")
console.log(filmesUp)
console.log()

//Array filmes animados
console.log('----------------------------------')
console.log('Exercicio 3')

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally","fortnite"]
console.log('Cartoons')
console.log()

//Função para juntar os dois arrays
//Array.prototype.push.apply(filmes, cartoons)
console.log('----------------------------------')
console.log('Exercicio 4')

let unirVideo = [].concat(filmes,cartoons)
let unirStream = [...filmes, ...cartoons]
//let unirAvi = Array.prototype.push.apply(filmes, cartoons)
console.log()
console.log('Juntar dois arrays: ')
console.log(unirStream)
console.log()

//Remover o último elemento de cartoons
console.log('----------------------------------')
console.log('Exercicio 5')
let ultimoCartoon = cartoons.pop()
console.log()
console.log("Remover último elemento: ")
console.log(ultimoCartoon)
console.log()

// Criar uma função que compare as notas e nos diga se elas 
// são iguais ou diferentes.
console.log('----------------------------------')
console.log('Exercicio 6')

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]

let unirNotas = [...asiaScores, ...euroScores]

    if (asiaScores[0]==euroScores[0])
    {console.log([0]+' Notas iguais')}
    else
    {console.log([0]+' Notas diferentes')}

    if (asiaScores[1]==euroScores[1])
    {console.log([1]+' Notas iguais')}
    else
    {console.log([1]+' Notas diferentes')}

    if (asiaScores[2]==euroScores[2])
    {console.log([2]+' Notas iguais')}
    else
    {console.log([2]+' Notas diferentes')}

    if (asiaScores[3]==euroScores[3])
    {console.log([3]+' Notas iguais')}
    else
    {console.log([3]+' Notas diferentes')}

    if (asiaScores[4]==euroScores[4])
    {console.log([4]+' Notas iguais')}
    else
    {console.log([4]+' Notas diferentes')}

    if (asiaScores[5]==euroScores[5])
    {console.log([5]+' Notas iguais')}
    else
    {console.log([5]+' Notas diferentes')}

    if (asiaScores[6]==euroScores[6])
    {console.log([6]+' Notas iguais')}
    else
    {console.log([6]+' Notas diferentes')}

    if (asiaScores[7]==euroScores[7])
    {console.log([7]+' Notas iguais')}
    else
    {console.log([7]+' Notas diferentes')}

