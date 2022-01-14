const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const result = data.employees.some((item) => item.managers.includes(id));
  return result;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const newArray = data.employees.reduce((acc, item) => {
      if (item.managers.includes(managerId)) {
        acc.push(`${item.firstName} ${item.lastName}`);
      }
      return acc;
    }, []);
    return newArray;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
