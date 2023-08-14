const Biblioteca = class Biblioteca {
    private listaDeLivros: [] = [];
    private listaDeUsuarios: [] = [];
    private listaDeEmprestimos: [] = [];

    constructor(listaDeLivros: [], listaDeUsuarios: [], listaDeEmprestimos: []) {
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