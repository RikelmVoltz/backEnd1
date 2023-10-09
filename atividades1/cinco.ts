import  * as leitor from "readline-sync"

function main () {
    let firstNumber =leitor.questionInt("digite o primeiro numero: ")
    let secondNumber = leitor.questionInt("digite o segundo numero: ")
    let thirdNumber = leitor.questionInt("digite o terceiro numero: ")

    console.log("o resultado dessa soma é:" , soma)
    console.log("o resultado dessa soma é:" , sub)
    console.log("o resultado dessa soma é:" , div)
    console.log("o resultado dessa soma é:" , mult)
}

function soma(firstNumber,secondNumber,thirdNumber) {
    return firstNumber + secondNumber + thirdNumber
}

function sub(firstNumber,secondNumber,thirdNumber) {
    return firstNumber - secondNumber - thirdNumber
}
function div(firstNumber,secondNumber,thirdNumber) {
    return firstNumber / secondNumber / thirdNumber
}
function mult(firstNumber,secondNumber,thirdNumber) {
    return firstNumber * secondNumber * thirdNumber
}

main()