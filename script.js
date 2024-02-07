// Exercício 1: Soma de Elementos
// Crie um programa que declare um array de números inteiros e calcule a 
// soma de todos os elementos do array.

// let somaElementos = [3,4,43,2,23,23,4,1,26,54,56]
// let soma = 0

// for(let i = 0; i < somaElementos.length; i++){
//     soma += somaElementos[i];
 
// }
//  console.log(`Resultado: ${soma}`);

// Exercício 2: Média de Notas
// Crie um programa que declare um array de notas de estudantes e 
// calcule a média dessas notas.

// let list = []

// const n1 = Number(prompt('Digite a nota do primeiro bimestre: '))
// const n2 = Number(prompt('Digite a nota do segundo bimestre: '))
// const n3 = Number(prompt('Digite a nota do tericeiro bimestre: '))
// const n4 = Number(prompt('Digite a nota do quarto bimestre: '))
// let soma = 0
// const aprovado = 'Parabéns você foi aprovado'
// const recuperacao = 'Precisa de um pouco mais de esforço'
// const reprovado = 'Você foi reprovado'

// list.push(n1, n2, n3, n4)

// for(i = 0; i < list.length; i++){
//     soma += list[i]
// }

// const media = soma / list.length
// if (media >= 7){
//     alert(`Sua media foi: ${media} situação: ${aprovado}`)
// }
// else if (media >= 5 && media < 7){
//     alert(`Sua media foi: ${media} situação: ${recuperacao}`)
// }
// else ( media < 5);{
//     alert(`Sua media foi: ${media} situação: ${reprovado} `)
// }

// console.log(media)


// Exercício 3: Encontrar Maior e Menor Valor
// Crie um programa que declare um array de números inteiros e encontre o 
// maior e o menor valor no array.

// let numeros = [10, 5, 8, 20, 3, 15]
// let maior = numeros[0]
// let menor = numeros[0]

// for(i = 0; i < numeros.length; i++){
//     if(numeros[i] > maior){
//         maior = numeros[i]
    
//     }
//     if(numeros[i] < menor){
//         menor = numeros[i]
//     }
// }

// console.log(`O maior número é: ${maior}`)
// console.log(`O menor número é: ${menor}`)

// Exercício 4: Contagem de Pares e Ímpares
// Crie um programa que declare um array de números inteiros e 
// conte quantos números são pares e quantos são ímpares.

// let numeros = [10, 5, 8, 20, 3, 15]

// for(i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0){
//         console.log(`${numeros[i]} é par`)
//     }else{
//         console.log(`${numeros[i]} é impar`)
//     }
// }

// Exercício 5: Inverter um Array
// Crie um programa que declare um array e o inverta, 
// ou seja, troque a ordem dos elementos.

// let numeros = [10, 5, 8, 20, 3, 15];
// numeros.reverse();

// console.log(`${numeros}`)

// Exercício 6: Remover Duplicatas
// Crie um programa que declare um array com elementos duplicados e 
// remova as duplicatas, deixando apenas uma ocorrência de cada elemento.

// Exercício 7: Busca de Elemento
// Crie um programa que declare um array e solicite ao usuário um 
// valor para buscar. O programa deve informar se o valor foi encontrado no array ou não.


// Exercício 8: Concatenar Arrays
// Crie dois arrays e concatene-os em um terceiro array.

// const letras = ['a', 'b', 'c', 'd']
// const num = [1, 2, 3, 4]
// const concatenar = letras.concat(num)

// console.log(`${concatenar}`)

// Exercício 9: Substituir Elementos
// Crie um programa que declare um array de strings e substitua 
// todas as ocorrências de uma determinada palavra por outra.

// let strings = ['Henrique', 'Bruninho', 'Gustavo'];

// function substituirStr(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].replaceAll('Henrique', 'Mafê')
//         .replaceAll('Bruninho', 'Amanda')
//         .replaceAll('Gustavo', 'Isabelle');
//     }
// }

// substituirStr(strings);

// console.log(`${strings}`)

// Exercício 10: Ordenação Crescente
// Crie um programa que declare um array de números inteiros e o ordene em ordem crescente.

// let numeros = [10, 5, 8, 20, 3, 15]

// numeros.sort(function(a, b){
//     return a - b;
// });

// console.log(`${numeros}`)





// for (let i = 1; i <= 10; i++) {;
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " x " + j );
//     }
// }