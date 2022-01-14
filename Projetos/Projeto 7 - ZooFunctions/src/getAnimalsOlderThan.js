const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const newObject = data.species.find((item) => item.name === animal);
  const result = newObject.residents.every((item) => item.age >= age);
  return result;
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('lions', 15));
