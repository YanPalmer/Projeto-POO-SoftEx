const Biblioteca = class Biblioteca {
    private listaDeLivros: string;
    private listaDeUsuarios: string;
    private listaDeEmprestimos: string;

    constructor(listaDeLivros: string, listaDeUsuarios: string, listaDeEmprestimos: string) {
        this.listaDeLivros = listaDeLivros;
        this.listaDeUsuarios = listaDeUsuarios;
        this.listaDeEmprestimos = listaDeEmprestimos;
    }

    adicionarLivro() {}

    registrarUsuario() {}

    realizarEmprestimo() {}

    realizarDevolucao() {}

    buscarLivroPorTitulo() {}
}

export {
    Biblioteca
}