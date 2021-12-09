const myFizzBuzz = require('./MyFizzBuzz');

describe('Ex.3 - Testando função MyFizzBuzz', () => {

  it('Chamada com um número divisível por 3 e 5 para verificar se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  it('Chamada com um número divisível por 3 para verificar se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz')
  })

  it('Chamada com um número divisível por 5 para verificar se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz')
  })

  it('Chamada com um número que não é divisível por 3 e 5 para verificar se o retorno é o esperado', () => {
    expect(myFizzBuzz(17)).toBe(17)
  })

  it('Chamada com um parâmetro que não é um número', () => {
    expect(myFizzBuzz('a')).toBe(false)
  })

})