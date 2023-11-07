    //Avaliador
    
    const avaliacoes = [ { notas: 1, valores: 2 }, { notas: 2, valores: 15 }, { notas: 3, valores: 18 }, { notas: 4, valores: 25 }, { notas: 5, valores: 40 }]

    let resultado = 0;
    let soma = 0;
    
    avaliacoes.forEach(({ notas, valores }) => {
        
        resultado += valores;
       
        soma += notas * valores;

    })
    const media = soma / resultado;
    
    console.log(media);