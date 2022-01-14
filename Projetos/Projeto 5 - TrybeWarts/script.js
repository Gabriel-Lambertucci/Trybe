const botao = document.getElementById('button');
const emailInput = document.getElementById('e-mail');
const passwordInput = document.getElementById('senha');
const check = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');
const inputArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const checkboxInputs = document.querySelectorAll('.checkbox-input');
const Name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const house = document.getElementById('house');
const trybewartsLogo = document.getElementById('trybewarts-forms-logo');




function checkLogin() {
  if ((emailInput.value === 'tryber@teste.com') && (passwordInput.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableButton() {
  sendButton.disabled = false;
}

function disabledButton() {
  sendButton.disabled = true;
}

function checkAgreement() {
  if (check.checked === false) {
    disabledButton();
  } else {
    enableButton();
  }
}

function showChars() {
  const remainingChars = 500 - inputArea.value.length;
  counter.innerText = `${remainingChars} caracteres restantes`;
}

sendButton.disabled = true;

botao.addEventListener('click', checkLogin);
check.addEventListener('click', checkAgreement);
inputArea.addEventListener('keyup', showChars);

/* function familyChecked() {
  if(document.getElementById('input-frontend').checked === true){
    document.getElementById('input-frontend').checked = true;
  }
  else if(document.getElementById('input-backend').checked === true){
    document.getElementById('input-backend').checked = true;
  }
  else if(document.getElementById('input-fullstack').checked === true){
    document.getElementById('input-fullstack').checked = true;
  }
} */

let object = Object.create(null);

let count = 0;




function formFilled(e) {
  e.preventDefault();
  object = {

    name: Name.value,
    lastName: lastName.value,
    email: emailForm.value,
    house: house.value,
  }

  for(let key in object){
    count +=1;
  }

  let actualObject;

  let json = JSON.stringify(object);  
  
  if(sessionStorage.getItem('form')){
    actualObject = JSON.parse(sessionStorage.getItem("form"))

    if(!document.getElementById('last-info')){
      trybewartsLogo.style.order = '3';
      let infoDiv = document.createElement('div');
      document.getElementById('main-content').appendChild(infoDiv);
      infoDiv.className = 'last-info'
      infoDiv.style.display ='flex';
      infoDiv.style.order ='2';
      infoDiv.style.flexDirection = 'row';
      infoDiv.style.flexWrap = 'wrap';
      infoDiv.style.justifyContent='flex-end';
      infoDiv.style.alignItems = 'flex-start';
      infoDiv.style.width = '500px'
      let createh4 = document.createElement('h4');
      infoDiv.appendChild(createh4);
      
      for(let i = 0; i < count; i+=1){
        
        createh4.textContent='Formulário preenchido com esses dados:'
        let createInput = document.createElement('input');
        createInput.className='storages';
        createInput.style.boxSizing = 'border-box';
        createInput.style.width= '60%';
        infoDiv.appendChild(createInput);
        
      }
      
      
    }
    
/*     Name.value = 'Nome: ' + actualObject.name + actualObject.lastName ;
    lastName.value = actualObject.lastName;
    emailForm.value = actualObject.email;
    house.value = actualObject.house; */
  
  } else{
    sessionStorage.setItem('form', json);
    
  }

  
  
}

sendButton.addEventListener('click',formFilled);
