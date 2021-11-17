let acesso = document.querySelector('#elementoOndeVoceEsta');

console.log(acesso.parentNode);
acesso.parentNode.style.color = 'blue';

console.log(acesso.firstElementChild);
acesso.firstElementChild.textContent ='Estamos no filho do filho'

let acesso2 = document.querySelector('#pai');

console.log(acesso2.firstElementChild);

console.log(acesso.nextSibling);

console.log(acesso.nextElementSibling);


console.log(acesso2.lastElementChild.previousElementSibling);

let criarIrmao = document.createElement('section');
criarIrmao.className = 'SeçãoIrmãCriada'
acesso2.appendChild(criarIrmao);

let criarFilho = document.createElement('p');
criarFilho.textContent = 'Elemento filho de OndeVoceEsta'
acesso.appendChild(criarFilho)

let Pff = acesso.firstElementChild;
let criarFilho2 = document.createElement('div');
criarFilho2.className = 'div'
Pff.appendChild(criarFilho2)

document.querySelector('.div').style.height = '100px';

console.log(document.querySelector('.div').parentNode.parentNode.nextElementSibling);



acesso2.removeChild(acesso2.lastElementChild);

acesso2.removeChild(acesso2.lastElementChild);

acesso2.removeChild(acesso2.lastElementChild);

acesso.removeChild(document.querySelector('#segundoEUltimoFilhoDoFilho'));

