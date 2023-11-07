// let vs const (.. var)

//  let nome = 'Felipe';

//  {
//     let nome = "Felipe Matos Lima"
//     console.log(nome)
//  }


// console.log(nome)


// console.clear()
// console.log(sobrenome)
// let sobrenome = 'Dio'
// console.log(sobrenome)
// É possivel alterar ou não alterar o conteúdo de alguma variavel
// O javascript permite alterar o tipo de variavel?

// console.clear();
// console.log(turma)
// var turma = 1094;
// turma = 1098
// console.log(turma)

// const media = 33.39
// const nomes = 'Felipe, Brenda, Nayara'
// console.log(nomes)
// console.log(nomes.length)
// console.log(nomes.split(','))
// console.log(media.toFixed())

const numeros = [1, 2, 3, 4, 5]
numeros.push('Mateus')

numeros.forEach((numero) => {
    console.log(numero)
});

numeros.map((item) => {
    console.log(item) 
});
