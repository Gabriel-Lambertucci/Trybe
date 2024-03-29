/* Parte II */

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*1- Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const addKey = (object, key, value) => {
  let newKey = key;
  let newValue = value;
  object[newKey] = newValue;
}

addKey(lesson2, 'turno', 'noite')

/*2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const objectKeys = (obj) => Object.keys(obj);

/*3- Crie uma função para mostrar o tamanho de um objeto. */

const objectLength = (obj) => Object.keys(obj).length;

/*4- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

const objectValues = (obj) => Object.values(obj);

/*5- Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)*/

let allLessons ={};


Object.assign(allLessons,{lesson1, lesson2, lesson3});

/* console.log(allLessons) */

/*6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
 */
 
const sumStudents = (obj) => {
  let soma = 0;
  let key;
  let entries;
  for(key in obj) {
    entries = Object.entries(obj[key]);
      for(let index = 0; index < entries.length; index+=1 ){
        for(let j=0; j<=1; j +=1){
          if(entries[index][j] == 'numeroEstudantes'){
            soma = soma + entries[index][j+1];
            
          }
        }
       
      }
  } 
  console.log(soma);
}

sumStudents(allLessons);

/*7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.*/

const keyValue = (obj, key, value) => {
  let values;
  values = Object.entries(obj[key]);  
  
    for (let i in values){
      if(values[i][0] == value){
        console.log(values[i][1]);
      }
    }
  
  
}

keyValue(allLessons,'lesson1', 'materia');

/*8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.*/

const verifyKeyValue = (obj, key, valor) => {
  let values;
  let cont = 0;
  values = Object.entries(obj); 
  console.log(values);
  for(let i in values){
    console.log(i);
    console.log(values[i])
    if(values[i].includes(key) == true && values[i].includes(valor) == true){
      cont +=1;
    }
  }
  if(cont == 0){
    return false;
  }
  else{
   return true;
  }
  
}

console.log(verifyKeyValue(lesson1, 'materia','Matemática'));