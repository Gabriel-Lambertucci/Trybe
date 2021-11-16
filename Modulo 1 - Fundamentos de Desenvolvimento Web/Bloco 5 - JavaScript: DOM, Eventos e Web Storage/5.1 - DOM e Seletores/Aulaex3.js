


let header = document.querySelector('#header-container');

header.style.backgroundColor = 'Green';
header.style.color ='white';

let emergencyTasks = document.querySelectorAll('.emergency-tasks div');

for (let i = 0; i < emergencyTasks.length; i++) {
    emergencyTasks[i].style.backgroundColor = 'LightSalmon';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks div');

for (let i = 0; i < noEmergencyTasks.length; i++) {
    noEmergencyTasks[i].style.backgroundColor = 'yellow';
}

for (let i = 0; i < emergencyTasks.length; i++) {
document.querySelectorAll('.emergency-tasks div h3')[i].style .backgroundColor='mediumpurple';
document.querySelectorAll('.emergency-tasks div h3')[i].style.color='white';

}

for (let i = 0; i < noEmergencyTasks.length; i++) {
    document.querySelectorAll('.no-emergency-tasks div h3')[i].style.backgroundColor='black';
    document.querySelectorAll('.no-emergency-tasks div h3')[i].style.color='white';
    }