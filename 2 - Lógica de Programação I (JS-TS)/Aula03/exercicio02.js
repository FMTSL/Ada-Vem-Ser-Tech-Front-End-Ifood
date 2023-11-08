//Felipe Matos de Lima
//Resolução de Exercicios Aula 03
//Criação de Objetos
const lista = [
    { numero: '19660156627897', nome: 'Fernanda Santos' },
    { numero: '23998058019370', nome: 'Rafael Souza' },
    { numero: '92291338611', nome: 'Maria Silva' },
    { numero: '55443795656', nome: 'Maria Souza' },
    { numero: '77743761456', nome: 'Ana Costa' },
    { numero: '47202302326', nome: 'Maria Ferreira' },
    { numero: '58017232567', nome: 'Sofia Costa' },
    { numero: '16733009491247', nome: 'Lucas Silva' },
    { numero: '63351859919', nome: 'Rafael Souza' },
    { numero: '84297701780', nome: 'Carlos Oliveira' }
]

const resultado = lista.reduce((coletor, nome) =>{
    
    if(nome.numero.length > 11){
        coletor.pj.push(nome);
    }

    else{
        coletor.pf.push(nome);
    }
    
    return coletor;
}, {pf: [], pj: []});

console.log(resultado);