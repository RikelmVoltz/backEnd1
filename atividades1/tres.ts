import  * as leitor from "readline-sync"

function main() {
    let adulto = leitor.questionInt("Insira a quantidade de adultos que exitem na festa: ")
    let crianças = leitor.questionInt("insira a quantidade de crianças que existem na festa: ")
    console.log("The total party size is" , calcula(adulto , crianças))
    
}
function calcula(adulto,criança): Number {
    return adulto + criança
}
main()