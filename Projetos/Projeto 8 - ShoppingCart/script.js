const ol = document.querySelector('.cart__items');

const totalPrice = () => {
  if (document.querySelector('.cart__item')) {
    const itemsList = Array.from(ol.children);
    let soma = 0;
    itemsList.forEach((item) => {
      const text = item.textContent;
      const valorString = text.substring(text.indexOf('$') + 1);
      const valorInt = parseFloat(valorString);
      soma += valorInt;
    }); const div = document.querySelector('.total-price');
    if (soma % 1 === 0) {
      div.innerHTML = `${soma}`;
    } else {
    const aux = soma.toFixed(2);
    const somaFinal = parseFloat(aux); div.innerHTML = `${somaFinal}`;
    }
  } else { 
  const div = document.querySelector('.total-price'); div.innerHTML = '';
  }
};

const emptyCart = () => {
  while (ol.lastChild) {
    ol.removeChild(ol.lastChild);
  }
  totalPrice();
  const itemsList = Array.from(ol.children);
  const text = itemsList.map((item) => item.innerText);
  saveCartItems(text);
};

const EmptyClick = () => {
  const emptyButton = document.querySelector('.empty-cart');
  emptyButton.addEventListener('click', emptyCart);
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

async function cartItemClickListener(event) {
  // coloque seu código aqui
  const father = event.target.parentElement;
  father.removeChild(event.target);
  const itemsList = Array.from(ol.children);
  const text = itemsList.map((item) => item.innerText);
  saveCartItems(text);
  totalPrice();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

let Id;
const createTotalDiv = () => {
  const div = document.createElement('div');
  div.className = 'total-price';
  div.order = '1';
  div.style.margin = '20px auto';
  div.style.color = 'green';
  const fatherSection = document.querySelector('.cart');
  fatherSection.appendChild(div);
  totalPrice();
};

const goToCart = async (id) => {
  const fetchResult = await fetchItem(id);
  const newObject = {
    sku: fetchResult.id,
    name: fetchResult.title,
    salePrice: fetchResult.price,
  };
  document.querySelector('.cart__items').appendChild(createCartItemElement(newObject));
  setTimeout(() => totalPrice(), 20);
  const itemsList = Array.from(ol.children);
  const text = itemsList.map((item) => item.innerText);
  setTimeout(() => saveCartItems(text), 20);
};

const buttonClicked = () => {
  const arrayButtons = document.querySelectorAll('.item__add');
  arrayButtons.forEach((item, index, array) => {
    item.addEventListener('click', function buttonEvent() {
      const elementId = array[index].previousSibling.previousSibling.previousSibling;
      Id = elementId.innerText;
      goToCart(Id);
    });
  });
};

const fillCart = (item) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = item;
  li.addEventListener('click', cartItemClickListener);
  ol.appendChild(li);
};

const cartItems = () => {
  if (localStorage.length !== 0) {
    const result = getSavedCartItems('cartItems');
    const aux = JSON.parse(result);
    aux.forEach((item) => {
      fillCart(item);
    });
  }
};

const h3 = document.createElement('h3');
h3.className = 'loading';
h3.style.order = '4';
h3.style.margin = '30px auto';
const Section = document.querySelector('.cart');

const loadingApiRequisition = () => {
  Section.appendChild(h3);
  h3.innerHTML = 'Loading Api...';
  h3.style.color = 'red';
};

const finishedApiRequisition = () => {
  Section.removeChild(h3);
};

const init = async () => {
  loadingApiRequisition();
  const fetchData = await fetchProducts('computador');
  finishedApiRequisition();
  fetchData.forEach((item) => {
    const newObject = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    const result = createProductItemElement(newObject);
    document.querySelector('.items').appendChild(result);
  });
    EmptyClick();
    cartItems();
    buttonClicked();
    createTotalDiv();
};

window.onload = () => init();
