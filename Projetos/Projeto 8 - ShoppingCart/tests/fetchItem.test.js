require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('Testando se FetchItem é uma função', () => {
    expect(typeof(fetchItem)).toBe('function');
  });

  it('Testando se fetch foi chamada ao executar fetchItem', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Testando se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");   
  });

  it('Testando se o retorno da função fetchProducts com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toBe(item);   
  });

  it('Testando se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. ', async () => {
    try {
    await fetchItem();
    } catch (e) {
    expect(e.message).toBe("You must provide an url");
    }
});

});
