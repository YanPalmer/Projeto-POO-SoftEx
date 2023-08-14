const Livro = class Livro {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    mostrar() {
        console.log("Aqui está: ", this.id);
    }
}

export {
    Livro
}