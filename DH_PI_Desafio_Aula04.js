// DESAFIO AULA 04 CONTROLE DE FLUXO
// node DH_PI_Desafio_Aula04.js

//Exercício 1
console.log('----------------------------------')
console.log('Exercicio 1')

// (altura > 1.40 && altura < 2.00) -> true
// (altura < 1.40 && altura > 1.20 && acompanhada == 'sim') -> true
// (altura < 1.40 && altura > 1.20 && acompanhada == 'nao') -> false
// (altura < 1.20) -> false

let altura = 1.30
let acompanhada = 'nao'
let acesso = ''

let podeSubir=function()
    {
        if (altura > 1.40 && altura < 2.00)
        {
            acesso = true
            console.log(acesso)
        }

        else if (altura < 1.40 && altura > 1.20 && acompanhada == 'sim')
            {   acesso = true
                console.log(acesso)}

        else if (altura < 1.40 && altura > 1.20 && acompanhada == 'nao')
            {   acesso = false
                console.log(acesso)}
        
        else if (altura < 1.20) 
        {
            acesso = false
            console.log(acesso)
        }
    }

podeSubir()