/* Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
 */

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function createDay(array){
    
    let li;
    
    for(let i = 0; i < array.length; i+=1){
        li = document.createElement('li');
        li.textContent = array[i];
        li.className = 'day';
        days.appendChild(li);
        

        if(li.textContent == '24' || li.textContent == '25' || li.textContent =='31'){
        li.classList.add('holiday');
        }

        if(li.textContent == '4' || li.textContent == '18' || li.textContent == '11' || li.textContent == '25'){
        li.classList.add('friday');
        }
        
    }
}



const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

createDay(dezDaysList);

/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

let button = document.createElement('button');
button.id='btn-holliday';

function feriadosButton(Feriados){
    
    button.textContent = Feriados;
   
    document.querySelector('.buttons-container').appendChild(button);

}

feriadosButton('Feriados');

/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 */

let clicked = false;

document.querySelector('#btn-holliday').addEventListener('click', changeColor);

function changeColor(){
   let hollidays =  document.querySelectorAll('.holiday');
   if(clicked == false){ 
    for(let i = 0; i < hollidays.length; i+=1){
       hollidays[i].style.backgroundColor = 'lightblue';
    }
   clicked = true;
    }
   else{
    for(let i = 0; i < hollidays.length; i+=1){
        hollidays[i].style.backgroundColor = 'rgb(238,238,238)';
    }
    clicked = false;
}
}

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

let fridayButton = document.createElement('button');
fridayButton.id='fridayBt';

function fridayB(string){
    
    fridayButton.textContent = string;
    document.querySelector('.buttons-container').appendChild(fridayButton);
}

fridayB('Sexta-feira');

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

document.querySelector('#fridayBt').addEventListener('click', changeText);

let clickedFridayButton = false;

function changeText(){
    
    let friday = document.querySelectorAll('.friday');
   
    if(clickedFridayButton == false){
        for(let i = 0; i < friday.length; i+=1){
            friday[i].textContent = 'Sextou /o'
        }
    
    clickedFridayButton = true;
    }
   
    else{
        let aux = 4;
        for(let i = 0; i <= 3; i+=1){
            friday[i].textContent = aux + 7*i ;
        }
    clickedFridayButton = false;
    }
   
    
}

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target . */

let daysArray = document.querySelectorAll('.day');

//daysArray[0].addEventListener('mouseover', zoom);

  for(let i = 0; i < daysArray.length; i+=1){
    
    daysArray[i].addEventListener('mouseover', zoomIn);
    daysArray[i].addEventListener('mouseleave', zoomOut);

}



function zoomIn(e){
    
    let target = e.target;
    target.style.fontSize = '50px'

}

function zoomOut(e){    
   
    let target = e.target;
    target.style.fontSize = '20px'

}

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */


function task(string){

    let tarefa = document.createElement('span');
    tarefa.textContent = string;
    tarefa.className = 'tasks'
    document.querySelector('.my-tasks').appendChild(tarefa);
    let tasksArray = document.querySelectorAll('.tasks');

    for(let i=0; i<tasksArray.length; i+=1){
        tasksArray[i].style.display = 'block';
    }

}


task('Estudar');
task('Academia');

/* Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function legendColor (string) {

    let div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = string;
    document.querySelector('.my-tasks').appendChild(div);

}

let cor1 = 'blue';
let cor2 = 'red'
legendColor(cor1);
legendColor(cor2);

/* Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

let bolas = document.querySelectorAll('.task');
for (let i = 0; i < bolas.length; i++) {
    bolas[i].addEventListener('click', selected);
}
let ballColor;

function selected(e) {
    
    let selectedBall = e.target; 
    ballColor = e.target.backgroundColor;
    console.log(ballColor);

    if(clicked == false){
        
        selectedBall.className = 'task-selected';
        clicked = true;
    
    } else{
        
        selectedBall.className = 'task';
        clicked = false;
    }
    
}




/* Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
 */

let diasdomes = document.querySelectorAll('.day');


for(let i = 0 ; i < diasdomes.length; i++) {
    diasdomes[i].addEventListener('click', legendColor);
    
}
let clicked2 = false;

function legendColor(e) {
    
    let dia = e.target;
    
    
    if(clicked2 == false){
        
        dia.style.backgroundColor = ballColor;
        clicked2 = true;
    }
    else{
        
        dia.style.backgroundColor = '#eee';
        clicked2 = false;
    }

}





















