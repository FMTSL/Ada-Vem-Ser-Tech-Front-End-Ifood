//O que é classe? Define um objeto com propriedades e métodos
class Livro {
    
    construtor(titulo, autor, anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
}

const livro = new Livro("JavaScript", "Felipe", 2023);
const livro2 = new Livro("Java", "Brenda", 2023);

console.log(livro.titulo)