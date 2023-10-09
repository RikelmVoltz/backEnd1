"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var firstNumber = leitor.questionInt("digite o primeiro numero: ");
    var secondNumber = leitor.questionInt("digite o segundo numero: ");
    var thirdNumber = leitor.questionInt("digite o terceiro numero: ");
    console.log("o resultado dessa soma é:", soma);
    console.log("o resultado dessa soma é:", sub);
    console.log("o resultado dessa soma é:", div);
    console.log("o resultado dessa soma é:", mult);
}
function soma(firstNumber, secondNumber, thirdNumber) {
    return firstNumber + secondNumber + thirdNumber;
}
function sub(firstNumber, secondNumber, thirdNumber) {
    return firstNumber - secondNumber - thirdNumber;
}
function div(firstNumber, secondNumber, thirdNumber) {
    return firstNumber / secondNumber / thirdNumber;
}
function mult(firstNumber, secondNumber, thirdNumber) {
    return firstNumber * secondNumber * thirdNumber;
}
main();
