// Criar uma calculadora usando Classes, Métodos e Exportações

const prompt = require("prompt-sync")();

console.log("Calculadora...");
console.log("Digite dois valores e em seguida escolha o operador de sua preferência: ");

class Entrada {     // Recebe 3 entradas
    private numero1: number;
    private numero2: number;
    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    somar() {
        return this.numero1 + this.numero2;
    }
    subtrair() {
        return this.numero1 - this.numero2;
    }
    dividir() {
        return this.numero1 / this.numero2;
    }
    multiplicar() {
        return this.numero1 * this.numero2;
    }
}

//  Entradas
iniciar();
function iniciar() {
    const num1 = parseFloat(prompt("Digite um número: "));
    const operador = prompt("Escolha um dos seguintes operadores:\n +\n -\n /\n *\n");
    const num2 = parseFloat(prompt("Digite o segundo número: "));
    const resultado = new Entrada(num1, num2);
    verificarOperador(operador, resultado);
}



function verificarOperador(operador: string, resultado: Entrada) {
    switch (operador) {
        case "+":
            console.log("Resultado: ", resultado.somar());
            break;
        case "-":
            console.log("Resultado: ", resultado.subtrair());
            break;
        case "/":
            console.log("Resultado: ", resultado.dividir());
            break;
        case "*":
            console.log("Resultado: ", resultado.multiplicar());
            break;
        default:
            console.log("Algo errado, tente novamente...");
            iniciar();
            break;
    }
}








