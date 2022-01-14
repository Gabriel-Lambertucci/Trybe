//Criando evento de clique para todas as cores
let colors = document.querySelectorAll('.color');

for(let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', ColorSelected);
}

function ColorSelected (e){
    for(let i = 0; i < colors.length; i += 1){
        colors[i].className = 'color';
    }

    let ActualColor = e.target;
    ActualColor.className = 'color selected';
}

//Criando evento de clique para todos pixels
let pixels = document.querySelectorAll('.pixel');
for(let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', ColorFill);
}

function ColorFill(e){
    let ActualPixel = e.target;

    for(let i = 0; i < colors.length; i += 1) {
        if(colors[i].className == 'color selected'){
            ActualPixel.id = colors[i].id;
        }
    }
}

//Criando Botão
let ClearButton = document.createElement('button');
document.getElementById('container').appendChild(ClearButton);
ClearButton.id = 'clear-board';
ClearButton.style.width = '200px';
ClearButton.style.height = '30px';
ClearButton.style.display = 'block';
ClearButton.style.marginTop = '20px';
ClearButton.textContent = 'Limpar';
ClearButton.style.fontSize = '16px';
ClearButton.style.position = 'relative';
ClearButton.style.bottom = '230px';
ClearButton.style.left = '503px';
document.getElementById('pixel-board').style.position = 'relative';
document.getElementById('pixel-board').style.top ='40px';
ClearButton.addEventListener('click', Reset);



function Reset(e){
    for(let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';
        
    }
 
}

//requisito 10
//Criando input e adicionando evento
let h4 = document.createElement('h4');
document.getElementById('container').appendChild(h4);
h4.textContent='Digite abaixo o número de linhas e colunas que vc deseja e clique no botão ao lado:'
h4.style.margin = '10px';
h4.style.maxWidth='100%';
h4.style.margin= '0 auto';
h4.style.textAlign='right';
h4.style.position='relative';
h4.style.bottom = '210px';
h4.style.left = '100px';
let input = document.createElement('input');
input.type='number';
input.min = '5';
input.max = '50';
input.style.width = '150px';
input.style.position = 'relative';
input.style.left='340px';
input.style.bottom = '180px'
document.getElementById('container').appendChild(input);

input.addEventListener('keyup', enter);

function enter(e) {
    let key = e.keyCode;
    let GuardaValor;
    if(key == 13)
        if(input.value < 5 || input.value > 50){
        alert('Número deve estar entre 5 e 50');
        }
        else{
            GuardaValor = input.value;
            console.log(GuardaValor)
        }
        return GuardaValor;
}

//criando botão e evento de clique

let gradeButton = document.createElement('button');
document.getElementById('container').appendChild(gradeButton);
gradeButton.id = 'botaograde';
gradeButton.style.position ='relative';
gradeButton.style.left='390px';
gradeButton.style.bottom='165px';
gradeButton.style.width='50px';
gradeButton.style.height='50px'
gradeButton.style.borderRadius = '100px';
gradeButton.style.backgroundColor = 'orange';


gradeButton.addEventListener('click', inputGrade);

function inputGrade(){
    let GuardaValor = enter();
    console.log(GuardaValor);
    let linhas = document.querySelectorAll('.line')
    let pixels = document.querySelectorAll('.pixel')
    for (let i = 0; i < linhas.length; i+=1){
        for (let index = 0; index < pixels.length; index+=1){
            linhas[i].removechild(pixels[index]);
        }
        
    }
}