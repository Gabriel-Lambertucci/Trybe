const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');


describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('Testando se FetchProducts é uma função fecthProducts', () => {

    expect(typeof(fetchProducts)).toBe('function');

  })

  it('Testando se fetch foi chamada ao executar fetchProducts', async () => {

    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
       
  })

  it('Testando se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";', async () => {

    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
       
  })

  it('Testando se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {

    const response = await fetchProducts('computador');
    expect(response).toBe(computadorSearch.results);
       
  })

  it('Testando se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. ', async () => {
      try {
      await fetchProducts();
      } catch (e) {
      expect(e.message).toBe("You must provide an url");
      }
  });
});
