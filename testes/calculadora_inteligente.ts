console.log("Iniciando calculadora...");

const escreva = require("prompt-sync")();
IniciarCodigo();
function IniciarCodigo() {
    console.log("Digite os valores a serem somados e escreva \"fim\" para encerar")
    let entrada;
    let operador;
    let lista = [];     // 10 + 20 fim

    // Guarda os valores inseridos e exclui o último
    do {
        let valor = 1;

        entrada = escreva(`Digite o valor ${valor}: `); // 10    |   20
        lista.push(entrada);
        valor += 1;
        operador = escreva("Escolha um operador: + - / *. Tecle \"fim\" para encerar: ") // + | fim
        lista.push(operador);
    } while (operador != "fim");
    console.log("Lista atual:");
    console.log(lista);
    console.log();

    let valor1;
    let valor2;
    let novaLista = [];
    // Ordena os valores para ficarem no padrão: Number, String, Number, String...
    for (let i = 0; i < lista.length - 1; i++) {
        valor1 = Number(lista[i]);
        valor2 = String(lista[i + 1]);
        novaLista.push(valor1);
        novaLista.push(valor2);
        i += 1;
    }
    novaLista.pop();
    console.log("Lista alterada:")
    console.log(novaLista);
    console.log();

    // Separa os valores em uma lista de variaveis
    // let resultadoFinal = new Calcular(novaLista[0], novaLista[1], novaLista[2]);
    let [entrada1, entrada2, entrada3] = novaLista;
    let objeto = new Calcular(novaLista);
    console.log()
}

class Calcular {
    private entradas: Array<string | number> = [];
    constructor(entradas: Array<string | number>) {
        this.entradas = entradas;
    }
    // Parei aqui
    // resultado() {
    //     let resultado = entrada1, entrada2, entrada3;
    //     console.log(entradas, resultado)
    // }


}