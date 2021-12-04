/* Parte I */

/* 1- Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
. Modifique a estrutura da função para que ela seja uma arrow function .
. Modifique as concatenações para template literals .
 */

const testingScope = (escopo) => {

  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }

}
testingScope(true); 

/* 2- Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
. Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
. Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
 */

let oddsAndEvens = [13, 3, 4, 10, 7, 2]; 

let compareFunction = (a,b) => a-b; 

// Seu código aqui.
let crescente = oddsAndEvens.sort(compareFunction) 


console.log(`Os números ${crescente} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉 */


/* Parte II  */

/* Crie uma função que receba um número e retorne seu fatorial.
. Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
. Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */

let resultado = 1;

 const fatorial = (n) => {
  
  if(n > 1){
    resultado = resultado*n;
    n = n - 1;
    fatorial(n);
    
}
  return resultado;
} 
const a = fatorial(6);
console.log(a);


let fatorialNumber = 1;
const fatorial2 = (n) => {
  
  n > 1 ? (fatorialNumber = fatorialNumber * n , n = n-1, fatorial2(n)) : true;
  
  return fatorialNumber; 
}
const c = fatorial2(6);
console.log(c);
