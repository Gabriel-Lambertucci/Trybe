const data = require('../data/zoo_data');

//Divindo a função getAnimalMap em funções menores para

function requisito1 () {
  let newObject = data.species.reduce((acc, item) => {
    if (!Object.keys(acc).includes(item.location)) {
      acc[item.location] = [item.name];
    } 
      acc[item.location].push(item.name);
    
    return acc;
  }, {})
  for(key in newObject) {
    const aux = newObject[key].filter((item, index, array) => array[index] !== array[index - 1]);
    newObject[key] = aux;  
  }
  return newObject;
}

function requisito3 () {
  const newObject = data.species.reduce((acc, item) => {
    if(!Object.keys(acc).includes(item.location)) {
      let objeto = {};
      objeto[item.name] =  item.residents.map((item) => item.name);
      acc[item.location] = [objeto];
    } 
      let objeto = {};
      objeto[item.name] =  item.residents.map((item) => item.name);
      acc[item.location].push(objeto);
    
    return acc;
  }, {})
  for(key in newObject) {
     newObject[key].shift(); 
  }
  return newObject;
}

function requisito4 () {
  const aux = requisito3();
  let index = 0;
  for(key in aux){
    aux[key].forEach(item => {
      for(key in item){
        item[key].sort();
      }
    })
  }
  return aux;
}
function requisito5 (options) {
  if(options.sex === 'male'){
    const newObject = data.species.reduce((acc, item) => {
      if(!Object.keys(acc).includes(item.location)) {
        let objeto = {};
        objeto[item.name] =  item.residents.filter((item) => item.sex === 'male').map((item) => item.name)
        acc[item.location] = [objeto];
      } 
        let objeto = {};
        objeto[item.name] =  item.residents.filter((item) => item.sex === 'male').map((item) => item.name)
        acc[item.location].push(objeto);
      
      return acc;
    }, {})
    for(key in newObject) {
      newObject[key].shift(); 
   }
    return newObject;
  } else {
    const newObject = data.species.reduce((acc, item) => {
      if(!Object.keys(acc).includes(item.location)) {
        let objeto = {};
        objeto[item.name] = item.residents.filter((item) => item.sex === 'female').map((item) => item.name);
        acc[item.location] = [objeto];
      } 
        let objeto = {};
        objeto[item.name] =  item.residents.filter((item) => item.sex === 'female').map((item) => item.name);
        acc[item.location].push(objeto);
      return acc;
    }, {})
    for(key in newObject) {
      newObject[key].shift(); 
   }
    return newObject;
  }
}

function requisito6 (options) {
  if(options.sex === 'male'){
    const newObject = data.species.reduce((acc, item) => {
      if(!Object.keys(acc).includes(item.location)) {
        let objeto = {};
        objeto[item.name] =  item.residents.filter((item) => item.sex === 'male').map((item) => item.name).sort();
        acc[item.location] = [objeto];
      } 
        let objeto = {};
        objeto[item.name] =  item.residents.filter((item) => item.sex === 'male').map((item) => item.name).sort();
        acc[item.location].push(objeto);
      
      return acc;
    }, {})
    for(key in newObject) {
      newObject[key].shift(); 
   }
    return newObject;
  } 
    const newObject = data.species.reduce((acc, item) => {
      if(!Object.keys(acc).includes(item.location)) {
        let objeto = {};
        objeto[item.name] = item.residents.filter((item) => item.sex === 'female').map((item) => item.name).sort();
        acc[item.location] = [objeto];
      }
        let objeto = {};
        objeto[item.name] =  item.residents.filter((item) => item.sex === 'female').map((item) => item.name).sort();
        acc[item.location].push(objeto);
      return acc;
    }, {})
    for(key in newObject) {
      newObject[key].shift(); 
   }
    return newObject;
  
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) {
    return requisito1();
  } if (options.includeNames && !options.sorted && !options.sex) {
    return requisito3();
  } if (options.includeNames && options.sorted && !options.sex) {
    return requisito4();
  } if (Object.keys(options).includes('includeNames', 'sex') && !options.sorted) {
    return requisito5(options);
  } if (Object.keys(options).includes('sex', 'sorted') && options.sorted === true) {
    return requisito6(options);
  }
}

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true, sex: 'female' }))