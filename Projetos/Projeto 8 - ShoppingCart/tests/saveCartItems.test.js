const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Testando se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems(["SKU: MLB2042701346 | NAME: Notebook Multilaser Legacy Book Pc310 Preta 14.1 , Intel Celeron N3000 4gb De Ram 64gb Ssd, Intel Hd Graphics 1366x768px Windows 10 Home | PRICE: $1419"]);
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Testando se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro cartItems e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    const result = ["SKU: MLB2042701346 | NAME: Notebook Multilaser Legacy Book Pc310 Preta 14.1 , Intel Celeron N3000 4gb De Ram 64gb Ssd, Intel Hd Graphics 1366x768px Windows 10 Home | PRICE: $1419"]
    const j = JSON.stringify(result)
    saveCartItems(result);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', j );
  })

});
