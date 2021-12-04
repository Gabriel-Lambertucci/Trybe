let resultado = 1;

 const fatorial = (n) => {
  
  if(n > 1){
    resultado = resultado*n;
    n = n - 1;
    fatorial(n);
    
}
  return resultado;
} 
const a = fatorial(6);
console.log(a);


let fatorialNumber = 1;
const fatorial2 = (n) => {
  
  n > 1 ? (fatorialNumber = fatorialNumber * n , n = n-1, fatorial2(n)) : true;
  
  return fatorialNumber; 
}
const c = fatorial2(6);
console.log(c);