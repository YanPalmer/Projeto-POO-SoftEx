// Importação de classes
import { Livro } from "./classes/Livro";
import { Usuario } from "./classes/Usuario";
import { Aluno } from "./classes/Aluno";
import { Professor } from "./classes/Professor";
import { Emprestimo } from "./classes/Emprestimo";
import { Biblioteca } from "./classes/Biblioteca";

const prompt = require("prompt-sync")();

//  Definição de atributos
let entrada;

function iniciarPrograma() {
    console.log("Bem vindo!");
    console.log("Este é um programa que cadastra alunos e professores para fazer empréstimos, devoluções e buscas...");

    console.log("Escolha uma das seguintes opções:");
    console.log("1 - Cadastrar aluno: ");
    console.log("2 - Cadastrar professor: ");
    console.log("3 - Entrar na biblioteca: ");
    entrada = prompt("Sua escolha: ");

    switch (entrada) {
        case 1:
            //  Cadastra o aluno
            cadastrarAluno();
            break;
        case 2:
            //  Cadastra o professor
            cadastrarProfessor();
            break;
        case 3:
            //  Entra na biblioteca
            entrarNaBiblioteca();
            break;
    
        default:
            //  Alerta que o valor inserido está incorreto e reinicia o programa
            console.log("Você digitou algo errado.\nTente novamente...");
            iniciarPrograma();
            break;
    }
}




iniciarPrograma();