const Emprestimo = class Emprestimo {
    private id: string;
    private livro: string;
    private usuario: string;
    private dataDeEmprestimo: number;
    private dataDeDevolucao: number;

    constructor(id: string, livro: string, usuario: string, dataDeEmprestimo: number, dataDeDevolucao: number) {
        this.id = id;
        this.livro = livro;
        this.usuario = usuario;
        this.dataDeEmprestimo = dataDeEmprestimo;
        this.dataDeDevolucao = dataDeDevolucao;
    }
    
    get() {}

    set() {}
}

export {
    Emprestimo
}