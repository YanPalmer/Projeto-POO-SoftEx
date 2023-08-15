import { Usuario } from "./Usuario";

//  Entradas (nome, id, turma, numDaMatricula)
const Aluno = class Aluno extends Usuario {
    private turma: string;
    private numDaMatricula: number;

    constructor(nome: string, id: string, turma: string, numDaMatricula: number) {
        super(nome, id);
        this.turma = turma;
        this.numDaMatricula = numDaMatricula;
    }

    get() {}

    set() {}
}

export {
    Aluno
}