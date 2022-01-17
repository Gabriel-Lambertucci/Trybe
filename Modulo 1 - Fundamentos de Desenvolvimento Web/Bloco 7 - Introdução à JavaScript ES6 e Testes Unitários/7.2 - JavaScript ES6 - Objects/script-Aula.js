/*Parte I - Adicionando novas chaves (keys)*/

let object = {
  name: 'Gabriel',
  lastName: 'Lambertucci',
};


const changeObject = (objeto, chave, valor) => {
  let newKey = chave;
  let value = valor;
  objeto[newKey] = value;
  console.log(objeto);
}

changeObject(object, 'city', 'Belo Horizonte');
changeObject(object, 'state', 'Minas Gerais');

/*Parte II - Object.keys*/

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

let showSkills = (object) => {
  for(let i = 0; i < Object.keys(object).length; i+=1){
    console.log(`Nome da habilidade: ${Object.keys(object)[i]}, Nível: ${Object.values(object)[i]}`)
  }
}
showSkills(student1);
showSkills(student2);

/* Parte III - Object.values */

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};


console.log(Object.values(coolestTvShow));




/* Parte IV - Object.entries */

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

/* Parte V - Object.assign */

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)



console.log(person)