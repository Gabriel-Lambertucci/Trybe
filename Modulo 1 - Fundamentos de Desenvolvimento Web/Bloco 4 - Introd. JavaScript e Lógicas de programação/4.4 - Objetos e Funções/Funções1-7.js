//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromo(palavra){

    let aux =true;
    let aux2 = palavra.split('');
    let aux3 = aux2.reverse();
    let aux4 = aux3.join('');
    

    if(palavra == aux4){ 
    
        return aux;
    }
    else{

        return !aux;
    }


}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
console.log(palindromo('ovo'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(array){

    let maiorvalor = 0;
    
    for(index=0; index<array.length; index+=1){

        if(maiorvalor < array[index] ){
            maiorvalor = index;
        }
        
    }

    return maiorvalor;

}

console.log(maiorValor([2, 3, 6, 7, 10, 1]))

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(array){

    let menorvalor = 1000;
    
    for(index=0; index<array.length; index+=1){

        if(menorvalor > array[index] ){
            menorvalor = index;
        }
        
    }

    return menorvalor;

}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


function maiorCaracter(array){

    let maior = "";

    for(index=0; index<array.length; index+=1){

        if(maior.length < array[index].length){
             maior = array[index];
        }

    }
        return maior;

}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorCaracter(array));


//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.



