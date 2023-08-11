const produtos = [
    { id: 1, nome: "detergente", valor: 2.00, categoria: "limpeza" },
    { id: 2, nome: "amaciante", valor: 6.50, categoria: "limpeza" },
    { id: 3, nome: "pão", valor: 2.00, categoria: "alimento" },
    { id: 4, nome: "queijo", valor: 7.00, categoria: "alimento" },
    { id: 5, nome: "leite", valor: 2.20, categoria: "alimento" },
];

// Realiza a soma dos valores
const soma = produtos.map(p => p.valor).reduce((acc, proximo) => acc + proximo);
// Ou
// const total = produtos.reduce((acc, p) => acc + p.valor, 0);

console.log(soma);


/*  // Passa por cada item da lista e retorna uma NOVA LISTA com os valores ALTERADOS
const ids = produtos.map(produto => produto.id);
const ids2 = produtos.map(produto => produto.id * 2);

console.log(ids);
console.log(ids2);
*/

/*  // FILTRA os parâmetros pelo NOME do item selecionado
const alimentos = produtos.filter(p => p.categoria === "alimento").map(alimento => alimento.nome);
console.log(alimentos);
*/