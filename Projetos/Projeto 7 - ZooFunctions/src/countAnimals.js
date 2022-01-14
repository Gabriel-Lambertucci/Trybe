const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return data.species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length <= 1) {
    const findElement = data.species.find((item) => item.name === animal.specie);
    return findElement.residents.length;
  }
  const findElement = data.species.find((item) => item.name === animal.specie);
  let count = 0;
  findElement.residents.forEach((item) => {
    if (item.sex === animal.sex) {
      count += 1;
    }
  }); return count;
}

module.exports = countAnimals;
