const Livro = class Livro {
    private id: string;
    private titulo: string;
    private autor: string;
    private anoDePublicacao: number;
    private genero: string;
    private quantidadeDeExemplaresDisp: number;

    constructor(id: string,
        titulo: string,
        autor: string,
        anoDePublicacao: number,
        genero: string,
        quantidadeDeExemplaresDisp: number) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoDePublicacao = anoDePublicacao;
        this.genero = genero;
        this.quantidadeDeExemplaresDisp = quantidadeDeExemplaresDisp;
    }

    get() {}

    set() {}
}

export {
    Livro
}