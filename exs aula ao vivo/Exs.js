

//1

let sum = 0;
let n = 1000;

for(let index = 1; index <= n; index += 1){
    sum = sum + index;
}

console.log("A soma de 1 a 1000 é :" + sum);

//3

let p1;
let p2;



//5
let carol = 24;
let baeta = 29;
let murilo = 35;;
let ages = [carol, baeta, murilo];
let menoridade = 1000;;

for(let index = 0; index <3; index++){
    
     if(ages[index] < menoridade){
         menoridade = ages [index];
     }     

}

console.log(menoridade)
