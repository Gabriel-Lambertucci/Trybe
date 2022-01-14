const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let countChild = 0; let countAdult = 0; let countSenior = 0;
  const newObject = entrants.reduce((acc, item) => {
    if (item.age < 18) {
      countChild += 1; acc.child = countChild;
    } else if (item.age >= 18 && item.age < 50) {
      countAdult += 1; acc.adult = countAdult;
    } else {
      countSenior += 1; acc.senior = countSenior;
    }
    return acc;
  }, {});
  return newObject;
}

function auxiliar(objeto) {
  const aux = objeto;
  if (!Object.keys(aux).includes('child')) {
    aux.child = 0;
  }
  if (!Object.keys(aux).includes('adult')) {
    aux.adult = 0;
  } if (!Object.keys(aux).includes('senior')) {
    aux.senior = 0;
  }
  return aux;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants.length === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const newObject = countEntrants(entrants);
  const newObject2 = auxiliar(newObject);
  const finalPrice1 = data.prices.child * newObject2.child;
  const finalPrice2 = data.prices.adult * newObject2.adult;
  const finalPrice3 = data.prices.senior * newObject2.senior;
  const finalPrice = finalPrice1 + finalPrice2 + finalPrice3;
  return finalPrice;
}

module.exports = { calculateEntry, countEntrants };
