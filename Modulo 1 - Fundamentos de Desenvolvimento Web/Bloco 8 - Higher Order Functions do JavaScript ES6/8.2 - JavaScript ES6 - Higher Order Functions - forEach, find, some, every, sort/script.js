/*1 - Use o método forEach chamando a callback showEmailList para apresentar os emails */

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList);

/*1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista: */

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  if(number % 3 === 0 && number % 5 ===0){
    return true;
  } 
  return false;
}

const isMultiple = numbers.find(findDivisibleBy3And5);

console.log(isMultiple);

/*2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
}

console.log(findNameWithFiveLetters());

/*3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:  */

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  if(id.id ='31031685'){
    return true;
  }
  return false;
}

const isId = musicas.find(findMusic);

console.log(isId)




