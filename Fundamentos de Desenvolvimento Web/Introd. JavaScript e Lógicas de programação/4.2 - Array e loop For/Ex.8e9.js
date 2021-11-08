// ex.8
let array = [];
let aux =1;
for(let index = 0; index < 25; index+=1){
    array[index] = aux;
    aux +=1;
}
console.log(array);

//ex.9
let aux2 = [];
for(let index = 0; index < array.length; index+=1){
    aux2[index] = array[index]/2;

}
console.log(aux2);