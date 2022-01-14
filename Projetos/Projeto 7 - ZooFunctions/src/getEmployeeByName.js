const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees: emp } = data;
  let newObject = {};
  newObject = emp.find((item) => item.firstName === employeeName || item.lastName === employeeName);
  if (newObject === undefined) {
    return {};
  }
  return newObject;
}

module.exports = getEmployeeByName;
