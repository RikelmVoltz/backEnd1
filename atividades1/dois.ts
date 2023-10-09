import  * as leitor from "readline-sync"

function main() {
    let nome = leitor.question("insira o nome do item: ")
    let valor = leitor.questionFloat("insira o valor do item ")
    let desconto = leitor.questionFloat("insira o desconto ")
    let valorDesconto = ((100-desconto)/100)
    console.log('O nome do item é:'  +(nome) )
    console.log('O valor do item é:' +(valor) )
    console.log('O valor  do desconto é:' +(valor*valorDesconto) )
}
main()