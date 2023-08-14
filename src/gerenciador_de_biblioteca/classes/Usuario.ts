const Usuario = class Usuario {
    private nome: string;
    private id: string;
    
    constructor(nome: string, id: string) {
        this.nome = nome;
        this.id = id;
    }

    get() {}

    set() {}
}

export {
    Usuario
}