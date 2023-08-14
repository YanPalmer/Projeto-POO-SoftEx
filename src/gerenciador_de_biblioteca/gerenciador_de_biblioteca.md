# Material Projeto POO

**Definição do Projeto**: Desenvolver um sistema de gerenciamento de biblioteca que permita aos usuários (alunos e professores) realizar operações de empréstimo, devolução, e busca de livros. O sistema será orientado a objetos, seguindo os princípios da programação orientada a objetos (POO).

Pontos relevantes: 

- Através deste projeto você deverá entender os principais conceitos da programação orientada a objetos, como herança, composição, encapsulamento, objetos, instâncias etc…
- Você pode implementar cada classe em um arquivo, utilizando o operador “export”, e importar as classes no arquivo principal “src/index.ts”.
- Você pode implementar um menu, que vai exibir no console as opções, e permitir que o usuário realize as operações, ou pode utilizar uma página html para exibir o controlar o sistema. Você ainda pode também apenas realizar uma execução roteirizada da sua aplicação, que apenas executa os métodos em sequência, demonstrando o funcionamento da aplicação.
- No momento de criar um novo empréstimo, você pode definir as datas como quiser.
- Ao criar um novo usuário, o sistema deverá instânciar um Aluno ou um Professor.

Entidades e Funcionalidades:

1. Livro:
    - Atributos: ID, Título, Autor , Ano de Publicação, Gênero, Quantidade de Exemplares Disponíveis.
    - Métodos: Getters e Setters para os atributos.
2. Usuário:
    - Atributos: Nome e ID
    - Métodos: Getters e Setters para os atributos.
3. Aluno
    1. Atributos: Turma e número de matrícula
    2. Métodos: Getters e setters para os atributos.
4. Professor
    1. Atributos: Alunos
    2. Métodos: Getters e setters para o atributo.
5. Empréstimo:
    - Atributos: ID, Livro, Usuário, Data de Empréstimo, Data de Devolução.
    - Métodos: Getters e Setters para os atributos.
6. Biblioteca:
    - Atributos: Lista de Livros, Lista de Usuários, Lista de Empréstimos.
    - Métodos:
        - Adicionar Livro: Adiciona um livro à lista de livros.
        - Registrar Usuário: Registra um novo usuário na biblioteca.
        - Realizar Empréstimo: Registra um novo empréstimo na biblioteca, atualizando as listas de empréstimos e disponibilidade de livros.
        - Realizar Devolução: Atualiza as informações do empréstimo após a devolução do livro.
        - Buscar Livro por Título: Retorna uma lista de livros que correspondem ao título informado.
        

Entregáveis extra:

O sistema deve ser capaz de listar os ultimos empréstimos de um livro. 

Ao realizar um empréstimo, o sistema deve registrar os empréstimos em uma nova propriedade chamada histórico de empréstimos nas entidades Aluno e Professor