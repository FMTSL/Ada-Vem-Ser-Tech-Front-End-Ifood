// const criarLivro = () =>{

// const { json } = require("express");

// }

//Objeto - Utilizado para armazenar propriedades e comportamentos
// const pessoa = {
//     nome: 'victor',
//     idade: 26,
//     endereco: {
//         rua: "luiz",
//         numero: 30
//     },
//     falar(){
//         console.log(this.nome, "falou");
//     },
// }


//Criar objeto livro
const criarLivro = function(titulo, autor, anoPublicacaco) {
    return {
        titulo,
        autor,
        anoPublicacaco
    }
}

const meuLivro = criarLivro("JavaScript", "Felipe", 2009);
// console.log(meuLivro)
//Deixar em formato Json
// console.log(JSON.stringify(meuLivro)) 

const obterTitulo = (livro) => livro.titulo;
const obterAutor = (livro) => livro.autor;
const obterAnoPublicacao = (livro) => livro.anoPublicacaco;

const imprimirDetalhesLivro = (livro) =>{
    console.log(`Titulo: ${obterTitulo(livro)}`);
    console.log(`Autor: ${obterAutor(livro)}`);
    console.log(`Ano de Publicação: ${obterAnoPublicacao(livro)}`);
}

imprimirDetalhesLivro(meuLivro);