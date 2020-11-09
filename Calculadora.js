var prompt = require('prompt-sync')()

let a = Number(prompt('Digite um número: '))
let b = Number(prompt('Digite outro número: '))

function sum(a, b){
    return a + b;
}

function sub(a, b) {
    return a - b;
 }

function mult(x, y){
    return x * y;
}

function div(a, b){
    return a / b
}
