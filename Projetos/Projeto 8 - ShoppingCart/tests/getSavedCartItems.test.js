const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');


localStorageSimulator('getItem');





describe('4 - Teste a função getSavedCartItems',  () => {
  // implemente seus testes aqui

  it('Testando se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  
  });

  it('Testando se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com cartItems como parâmetro', () => {
    
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
    
  });
});
