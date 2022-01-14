const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  let newArray = [];
  newArray = data.species.filter((item) => ids.includes(item.id));
  return newArray;
}

module.exports = getSpeciesByIds;
