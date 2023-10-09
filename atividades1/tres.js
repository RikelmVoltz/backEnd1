"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adulto = leitor.questionInt("Insira a quantidade de adultos que exitem na festa: ");
    var crianças = leitor.questionInt("insira a quantidade de crianças que existem na festa: ");
    console.log("The total party size is", calcula(adulto, crianças));
}
function calcula(adulto, criança) {
    return adulto + criança;
}
main();
