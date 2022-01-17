const getSavedCartItems = (param1) => {
  // seu código aqui
  const aux = localStorage.getItem(param1);
  return aux;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
