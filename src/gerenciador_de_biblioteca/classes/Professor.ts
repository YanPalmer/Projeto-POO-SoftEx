import { Usuario } from "./Usuario";

//  Entradas (nome, id, alunos)
const Professor = class Professor extends Usuario {
    private alunos: string;

    constructor(nome: string, id: string, alunos: string) {
        super(nome, id);
        this.alunos = alunos;
    }

    get() {}

    set() {}
}

export {
    Professor
}