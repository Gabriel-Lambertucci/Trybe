// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let aux = true;
  if (a === true && b === true) {
    return aux;
  } else {
    return !aux;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(listaNomes) {
  // seu código aqui
  let primeiro = listaNomes[listaNomes.length - 1];
  let segundo = listaNomes[0];
  let nomes = primeiro + ', ' + segundo;
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3 + ties * 1;
  return pontos;
}

// Desafio 6
function highestCount(listaNumeros) {
  // seu código aqui
  // seu código aqui
    // seu código aqui
  let maiorvalor = Math.max(...listaNumeros);
  let contador = 0;
  for (let index = 0; index < listaNumeros.length; index += 1) {
    if (maiorvalor === listaNumeros[index] || maiorvalor === 0){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  if (Math.abs(distancia1) > Math.abs(distancia2)){
    return 'cat2';
  } else if (Math.abs(distancia2) > Math.abs(distancia1)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayInteiros) {
  let aux = [];
  for (let index = 0; index < arrayInteiros.length; index += 1){
      if (arrayInteiros[index] % 3 === 0 && arrayInteiros[index] % 5 === 0) {
      aux[index] = 'fizzBuzz';
    } else if (arrayInteiros[index] % 3 === 0) {
      aux[index] = 'fizz';
    } else if (arrayInteiros[index] % 5 === 0) {
      aux[index] = 'buzz';
    } else {
      aux[index] = 'bug!';
    }
  }
  return aux;
}

// Desafio 9
function encode(palavra) {
    // seu código aqui
  let aux1 = palavra.replace(/a/g, '1');
  let aux2 = aux1.replace(/e/g, '2');
  let aux3 = aux2.replace(/i/g, '3');
  let aux4 = aux3.replace(/o/g, '4');
  let aux5 = aux4.replace(/u/g, '5');
  return aux5;
}
// Desafio 9
function decode(palavra) {
  // seu código aqui
  let aux1 = palavra.replace(/1/g, 'a');
  let aux2 = aux1.replace(/2/g, 'e');
  let aux3 = aux2.replace(/3/g, 'i');
  let aux4 = aux3.replace(/4/g, 'o');
  let aux5 = aux4.replace(/5/g, 'u');
  return aux5;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

// Referência: Os métodos prontos: .replace(), Math.abs(), Math.max() e .split(), usados nesse código, foram consultados no site https://www.w3schools.com/js/js_string_methods.asp
