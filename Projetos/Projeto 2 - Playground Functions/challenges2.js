// Desafio 10
function techList(arrayTecnologias, name) {
  // seu código aqui
  arrayTecnologias.sort();
  let aux = [];
  if (arrayTecnologias.length === 0){
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayTecnologias.length; index += 1) {
      aux[index] = {
        tech: arrayTecnologias[index],
        name: name,
      }
    }
  return aux;
  } 
}

// Desafio 11
function generatePhoneNumber(array11) {
  // seu código aqui
 let aux;
if(array11.length != 11){
  return "Array com tamanho incorreto."
}else{
    for(index=0;index<array11.length;index += 1){
      if(array11[index] < 0 || array11[index] > 9 || contador(array11)){
         aux = true;
         break;
        }else{
         aux = false;
      }
  }
      if(aux == true){
          return "não é possível gerar um número de telefone com esses valores"
      }
      else{
          return '('+array11[0]+array11[1]+')'+' '+array11[2]+ array11[3]+array11[4]+array11[5]+array11[6]+'-'+array11[7]+array11[8]+array11[9]+array11[10];
      }
  
}
}
//Função para contar se um valor aparece mais de 3 vezes
function contador(array11) {
  const count = Object.create(null); // criando um objeto vazio
  let aux;

  for (const key of array11){
    if (!count[key]){
      count[key] = 1;
    } else {
      count[key] += 1;
    } //Loop que pega cada o elemento de cada posição do array11 e verifica se ja existe uma propriedade com seu valor. Se não insere com valor 1.
      //Se ja existir uma propriedade para o elemento, adiciona mais um, para ir contando o numero de vezes que ele irá aparecer.
  }
  for (let key in count){
    if (count[key] >= 3){
      aux = true;
      break;
    } else {
      aux = false;
    }
  }
  return aux;  
}
//base de código retirado no link: https://pt.stackoverflow.com/questions/459413/verificar-quantas-vezes-um-n%C3%BAmero-aparece-no-array

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  if((lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))) || (lineB < (lineC + lineA) && lineB > (Math.abs(lineC - lineA))) || (lineC < (lineA + lineB) && lineC > (Math.abs(lineA - lineB)))){
      return true;
  }
  else{
      return false;
  }
}

// Desafio 13
function hydrate(txt) {
  // seu código aqui
let number=[];
let aux=[];
let conta = 0;
let soma=0;
for(let i = 0; i < txt.length; i++){
  number[i] = parseInt(txt[i]); //tranforma os numeros dentro da string em variaveis do tipo number;
}
console.log(number);
for(j=0; j <=number.length; j++){
  if(!isNaN(number[j]) ){ //retira todos os espaços do vetor que ficaram como NaN, deixando assim so os numeros;
    aux[conta] = number[j];
    soma = soma + aux[conta];
    conta += 1;
  }
}
console.log(aux,soma);
if(soma == 1){
return soma +' copo de água'
}
else{
  return soma +' copos de água'
}
}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};


