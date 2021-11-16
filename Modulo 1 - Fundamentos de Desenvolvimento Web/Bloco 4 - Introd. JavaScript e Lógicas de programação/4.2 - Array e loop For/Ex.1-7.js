let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
//ex.1
for(let elemento of numbers){
        console.log(elemento);
}

//ex.2
for(let index = 0; index < numbers.length; index+=1){
        sum = sum + numbers[index];
}

//ex.3
console.log("Soma dos elementos: " + sum);

media = sum/numbers.length;

console.log('Media dos elementos: ' + media);

//ex.4
if( media > 20){
        console.log('valor maior que 20');
}
else{
        console.log('valor menor ou igual a 20');
}

//ex.5
let maiorvalor = 0;

for(let index = 0; index < numbers.length; index+=1){
        
        if(numbers[index] > maiorvalor){
                maiorvalor = numbers[index];
        }
}

console.log('o maior valor é: ' + maiorvalor);

//ex.6
let impar = 0;

for(let index = 0; index < numbers.length; index+=1){
        if(numbers[index]%2 != 0){
                impar +=1;
        } 

}

if (impar > 0){
        console.log("total de numeros impares: " + impar);
}
else if(impar <=0){
        console.log('nenhum valor ímpar encontrado');
}

//ex.7
let menorvalor = numbers[0];

for(let index = 1; index < numbers.length; index+=1){
        
        if(numbers[index] < menorvalor){
                menorvalor = numbers[index];
        }
}
console.log("o menor valor é: " + menorvalor);

