const Aluno = class Aluno {
    private turma: string;
    private numDaMatricula: number;

    constructor(turma: string, numDaMatricula: number) {
        this.turma = turma;
        this.numDaMatricula = numDaMatricula;
    }

    get() {}

    set() {}
}

export {
    Aluno
}