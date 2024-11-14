//MAP
//percorre todo o array e executada a ação q tivermos progamado

// let lista = ['Altamiro', 'Barnabé', 'Cremildo'];

// lista.map((nome,posicao)=>{console.log(`o nome é ${nome} e ele ocupa a ${posicao}`)})

//REDUCE
//procura reduzir um array normalmente através de
//operações matematicas, transformando em um unico valor

// let numeros = [2, 3, 5, 10];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//     console.log(`${acumulador} - total até agora.`);
//     console.log(`${numero} - valor total.`);
//     console.log(`${indice} - posição até agora.`);
//     console.log(`${original} - array original`);

//     console.log('------------------------');
//     return acumulador +=numero;
// });

// console.log(`Total do reduce é ${total}`);

//FIND
//faz uma busca dentro do array e devolve o primeiro item que
//ele encontra e corresponde ao críterio de busca

// let listagem = [2, 3, 'Marcelo', 5, 'professor'];
// let busca = listagem.find((item2)=>{
//     if(item2 === "Marcelo"){
//         return console.log('Nome encontrado')
//     }else{
//         return console.log('Nome não encontrado')
//     }
// })

// console.log(busca);

//FILTER
//filtra itens dentro do array
let palavras = ['alface', 'beterraba', 'cenoura', 'dedo'];
resultado = palavras.filter((item3) => {
    return item3.length < 7;
})

console.log(resultado);