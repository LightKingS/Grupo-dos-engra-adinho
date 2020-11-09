var prompt = require('prompt-sync')()

let a = Number(prompt('Digite um número: '))
let b = Number(prompt('Digite outro número: '))

function sum(a, b){
    return a + b;
}

function sub(a, b) {
    return a - b;
 }

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b
}
