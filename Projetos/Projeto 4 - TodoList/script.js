// Evento de clique no botão

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', criarTarefa);
const input = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

function criarTarefa() {
  const li = document.createElement('li');
  li.id = 'item-lista';
  li.textContent = input.value;
  li.style.color = 'white';
  li.style.fontWeight = 'bold';
  li.style.padding = '4px';
  li.style.width = '300px';
  document.getElementById('lista-tarefas').appendChild(li);
  input.value = '';
  if (lista.children.length !== 0) {
    for (let i = 0; i < lista.children.length; i += 1) {
      lista.children[i].addEventListener('click', changeColor)
      lista.children[i].addEventListener('dblclick', riskItem)
    }
  }
  return lista.children.length;
}

// Função para mudar a cor da linha
function changeColor(e) {
  for (let i = 0; i < lista.children.length; i += 1) {
    lista.children[i].style.backgroundColor = '#002642';
    let target = e.target;
    target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

// Função de dois cliques para riscar linha

function riskItem(e) {
  let target = e.target;
  // Situação em que o elemento chamado ja está riscado
  if (target.className === 'completed') {
    target.classList.remove('completed');
  // Situação em que o elemento chamado não está riscado
  } else {
    target.className = 'completed';
  }
}

// Botão apaga tudo
const clearListButton = document.createElement('button');
clearListButton.id = 'apaga-tudo';
clearListButton.style.width = '200px';
clearListButton.style.height = '20px';
clearListButton.style.marginLeft = '50px';
clearListButton.textContent = 'Limpar lista';
clearListButton.style.fontWeight = 'bold';
clearListButton.style.marginBottom = '10px';
clearListButton.style.backgroundColor = '#840032';
document.getElementById('main-content').appendChild(clearListButton);
function eraseList() {
  lista.innerHTML = '';
}
clearListButton.addEventListener('click', eraseList);

// Botão remove finalizados
const clearFinishedButton = document.createElement('button');
document.getElementById('main-content').appendChild(clearFinishedButton);
clearFinishedButton.id = 'remover-finalizados';
clearFinishedButton.style.width = '200px';
clearFinishedButton.style.height = '20px';
clearFinishedButton.style.marginLeft = '50px';
clearFinishedButton.textContent = 'Limpar itens finalizados';
clearFinishedButton.style.fontWeight = 'bold';
clearFinishedButton.style.marginBottom = '10px';
clearFinishedButton.style.backgroundColor = '#840032';
function eraseFinished() {
  for (let i = 0; i < lista.children.length; i += 1) {
    if (lista.children[i].className === 'completed') {
      lista.removeChild(lista.children[i]);
      i -= 1;
    }
  }
}
clearFinishedButton.addEventListener('click', eraseFinished);

// Botão salvar tarefas
const loadButton = document.createElement('button');
function saveState() {
  const listObject = Object.create(null);
  for(key in listObject && posicao in lista.children) {
    key = posicao;
    listObject[key] = lista.children[posicao];
  }
}

loadButton.addEventListener('load', saveState);
