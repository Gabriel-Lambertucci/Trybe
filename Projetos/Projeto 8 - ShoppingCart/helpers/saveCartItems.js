const saveCartItems = (text) => {
  // seu código aqui
    localStorage.setItem('cartItems', JSON.stringify(text));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
