const sum  = require('./sum');

describe('Exercício 1: Testando função sum', () => {

  it('Soma 4 + 5 = 9',() => {
    expect(sum(4,5)).toBe(9);
  })

  it('Soma 0 + 0 = 0',() => {
    expect(sum(0,0)).toBe(0);
  })

  it('erro quando os parâmetros são 4 e "5" (string 5)',() => {
    expect(() => {
      sum(4,'5');
    }).toThrow();
  })

  it('mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")',() => {
    expect(() => {
      sum(4,'5');
    }).toThrowError(new Error('parameters must be numbers'));
  })

})

