const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  let aux = [];
  const employeeId = data.employees.find((item) => item.id === id);
  const especieId = employeeId.responsibleFor[0];
  const animalElement = data.species.find((item) => item.id === especieId);
  const result = animalElement.residents.reduce((acc2, elem) => {
    if (acc2.length === 0 || elem.age > acc2[2]) {
      aux = acc2;
      aux[0] = elem.name;
      aux[1] = elem.sex;
      aux[2] = elem.age;
    }
    return aux;
  }, []);
  return result;
}

module.exports = getOldestFromFirstSpecies;
