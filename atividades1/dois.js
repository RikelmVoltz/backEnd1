"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("insira o nome do item: ");
    var valor = leitor.questionFloat("insira o valor do item ");
    var desconto = leitor.questionFloat("insira o desconto ");
    var valorDesconto = ((100 - desconto) / 100);
    console.log('O nome do item é:' + (nome));
    console.log('O valor do item é:' + (valor));
    console.log('O valor  do desconto é:' + (valor * valorDesconto));
}
main();
