document.getElementsByTagName('p')[1].innerText = "Me vejo em um caminho de sucesso profissional!";

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

document.getElementsByTagName('h1')[0].innerText ='Exercício 5.1 - Javascript'


let upper = document.getElementsByTagName('p');

for(let i = 0; i < upper.length; i++){

    upper[i].textContent = upper[i].textContent.toUpperCase();

}

for(let i = 0; i < upper.length; i++){

console.log(upper[i].textContent)
    
}
    
