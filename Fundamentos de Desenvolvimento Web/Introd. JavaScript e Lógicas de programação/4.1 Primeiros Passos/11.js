let salario = 3000;
let aux1;
let aux2;
let resultado;

if(salario<=1556.94){
    aux1 = salario*0.08;
}
else if(salario>=1556.95 && salario<=2594.92){
    aux1 = salario*0.09;
}
else if(salario>=2594.93 && salario<=5189.82){
    aux1 = salario*0.11;
}
else{
    aux1 = 570.88;
}

if((salario-aux1)<=1903.98){
    aux2 = 0;
}
else if((salario-aux1)>=1903.99 && (salario-aux1)<=2826.65){
    aux2 = (salario-aux1)*0.075 - 142.80;
}
else if((salario-aux1)>=2826.66 && (salario-aux1)<=3751.05){
    aux2 = (salario-aux1)*0.15 - 354.80;
}
else if((salario-aux1)>=3751.06 && (salario-aux1)<=4664.18){
    aux2 = (salario-aux1)*0.225 - 636.13;
}
else{
    aux2 = (salario-aux1)*0.275 - 869.36;
}

resultado = salario - aux1 - aux2;

console.log("R$" + resultado);





