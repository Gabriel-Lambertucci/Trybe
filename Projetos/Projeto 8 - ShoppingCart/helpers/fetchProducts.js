const fetchProducts = async (param1) => {
  // seu código aqui
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param1}`);
  const data = await response.json();
  return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
