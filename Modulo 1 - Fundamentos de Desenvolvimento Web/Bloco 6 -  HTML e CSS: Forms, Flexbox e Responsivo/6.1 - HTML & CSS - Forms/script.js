let statesList = document.querySelector('#select-estado');
console.log(statesList);


let statesOptions = document.createElement('option');
let brazilStates =  ["Acre","Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Pailo","Sergipe","Tocantins","Distrito Federal"];

for (let i = 0; i < brazilStates.length; i +=1 ){
    let statesOptions = document.createElement('option');
    statesOptions.textContent = brazilStates[i];
    statesOptions.className = 'estado';
    statesOptions.required;
    statesList.appendChild(statesOptions);
}

let data = document.getElementById("input-data");
console.log(data)


















