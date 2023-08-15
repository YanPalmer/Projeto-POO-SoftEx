// Importação de classes
import { Livro } from "./classes/Livro";
import { Usuario } from "./classes/Usuario";
import { Aluno } from "./classes/Aluno";
import { Professor } from "./classes/Professor";
import { Emprestimo } from "./classes/Emprestimo";
import { Biblioteca } from "./classes/Biblioteca";

const prompt = require("prompt-sync")();

//  Definição de atributos

let professor;
let biblioteca;

let entrada: Number;
let aluno: Aluno | undefined;

function iniciarPrograma() {
    console.log("=======================================");
    console.log("Bem vindo!");
    console.log("Este é um programa que cadastra alunos e professores para fazer empréstimos, devoluções e buscas...");

    escolha();
}

function escolha() {
    // console.log(aluno); O aluno é aberto aqui
    console.log("Escolha uma das seguintes opções:");
    console.log("1 - Logar como aluno: ");
    console.log("2 - Logar como professor: ");
    console.log("3 - Entrar na biblioteca: ");
    entrada = parseInt(prompt("Sua escolha: "));

    switch (entrada) {
        case 1:
            //  Loga como aluno
            console.log("\nUsuário aluno selecionado!");
            aluno = usuarioAluno();
            console.log();
            if (aluno.nome) {
                console.log(`Olá, ${aluno.nome}.`);
                escolha();
            } else {
                escolha();
            }
            break;
        case 2:
            //  Loga como professor
            // usuarioProfessor();
            break;
        case 3:
            //  Entra na biblioteca
            // console.log("\nEntrando na biblioteca!");
            if (aluno) {
                entrarNaBiblioteca(aluno.nome);
            } else {
                console.log("Nenhum aluno logado.")
            }
            break;

        default:
            //  Alerta que o valor inserido está incorreto e reinicia o programa
            console.log("Você digitou algo errado.\nTente novamente...");
            iniciarPrograma();
            break;
    }
}

function usuarioAluno() {
    // let array = [];  Implementar uma lista que guarda os IDs dos alunos
    const nome = prompt("Qual o seu nome: ");
    const id = "#001";
    const turma = "a1";
    const numDaMatricula = 1234 - 5678;
    //  (nome, id, turma, numDaMatricula)
    const aluno = new Aluno(nome, id, turma, numDaMatricula);
    return aluno;
}

function entrarNaBiblioteca(nomeAluno: string) {
    console.log(`Bem vindo a biblioteca, ${nomeAluno}.`);
    
}



iniciarPrograma();

/*
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

function cadastrarAluno() {
    const novoUsuario = prompt("Qual seu nome de aluno: ")
}
*/