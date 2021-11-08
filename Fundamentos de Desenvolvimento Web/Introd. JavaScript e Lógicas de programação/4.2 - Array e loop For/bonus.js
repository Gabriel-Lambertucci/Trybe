//Ex.1 Ordem crescente

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

console.log(array)

//ex.2 Ordem decrescente

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

console.log(array)

//ex.3
let array2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = [];

for(let index=0; index < array2.length; index += 1) {
    if(index+1 < array2.length) {
    aux[index] = array2[index] * array2[index + 1];
    }
    else{
        aux[index] = array2[index]*2;
    }
}
console.log(aux);