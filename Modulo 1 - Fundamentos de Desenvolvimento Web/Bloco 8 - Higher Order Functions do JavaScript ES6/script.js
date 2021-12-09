// Ao chamar a função doingThings:
const doingThings = (func) => func();


// Ela deve retornar o valor do respectivo parâmetro, neste caso:

const wakeUp = () => 'Acordando!!';
const cofee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!';

console.log(doingThings(wakeUp), doingThings(cofee), doingThings(sleep));

/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const newEmployees = (func, nomeCompleto) =>{
  let object = func();
  object.fullName = nomeCompleto;
  object.email = `${nomeCompleto}@trybe.com`;
  return object;
}


const personHired = () => {
  let object = {
    fullName: 'nomeCompleto',
    email: 'email',
  }
  return object
}


console.log(newEmployees(personHired, 'Gabriel'))

/*2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").*/

const check = (numeroApostado, numeroSorteado) => {
  if(numeroApostado == numeroSorteado){
    return true;
  }
  return false;
}

const resultadoSorteio = (numeroApostado, func) => {
  let numero = Math.random() * 5;
  let numeroSorteado = Math.round(numero);
  console.log(numeroSorteado);
  if(func(numeroApostado, numeroSorteado) == true){
    return `Parabéns você ganhou`;
  }
  return `Tente novamente`
}

console.log(resultadoSorteio(5, check));

/*3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.  */

const checkAnswers = (arr1, arr2) => {
  let score = 0;
  for(let i = 0; i < arr1.length; i += 1) {
    if(arr1[i] === arr2[i]){ 
      score = score + 1;
    }
    else{
      score = score - 0.5;
    }
  }
  return score;
}

const finalGrade = (arr1, arr2, func) => {
  return `Nota: ${func(arr1, arr2,)}`;
}

console.log(finalGrade(['b','c','b'], ['a','b','c'], checkAnswers))