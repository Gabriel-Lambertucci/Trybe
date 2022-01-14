/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
/* Função auxiliar usada para realizar o requisito de teste do tipo number do elemento, já que o Lint estava acusando complexidade alta; */
const testeType = (arr) => {
  for (const iterator of arr) {
    if (typeof iterator !== 'number') { 
      return false; 
  }
}
};

const average = (arr) => {
  let soma = 0;
  if (arr.length === 0 || testeType(arr) === false) {
    return undefined;
  }
  soma = arr.reduce((accum, curr) => accum + curr);
  let result = soma / arr.length;
  return Math.round(result);
};

module.exports = average;