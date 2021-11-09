//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 9;
let quad="";

for(let linha = 1; linha <= n; linha += 1 ){
        
    for(let coluna = 1; coluna <= n; coluna += 1 ){
        quad = quad + "*" ;
    
        
    }
    quad = quad + "\n";
}

//console.log(quad);

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 


let tri="";

for(let linha = 1; linha <= n; linha += 1 ){
        
    tri = tri + "*";
    "\n";
    //console.log(tri);
    
}

//3- Agora inverta o lado do triângulo.

let inv="";

        
for(let linha = 1; linha <= n; linha += 1 ){
       
    for(let aux = 0; aux < n - linha ; aux = aux +1 ){
        inv = inv + ' ';
        
        
    }
    for(let i = 1; i <= linha ; i = i + 1 ){
        inv = inv + '*';
        
        
    } 
    //console.log(inv);
    "\n";
    inv="";

}

//4- Depois, faça uma pirâmide com n asteriscos de base:

let pir="";

if(n%2!=0){
let esp = n-1;
let espdir = n-1;
let ast= 1;

    for(let linha = 1; linha <=(n/2 +0.5) ; linha += 1 ){
       
        for(let esq = 1; esq <= esp/2  ; esq = esq + 1 ){
            pir = pir + ' ';
            
        }
        esp = esp - 2; 

        for(let i = 1; i <= ast ; i = i + 1 ){
            pir = pir + '*';
                
        } 
        ast = ast +2;

        for(let dir = 1; dir <= espdir/2 ; dir = dir +1 ){
            pir = pir + ' ';
            
        }
        espdir = espdir -2;
        
        console.log(pir);
        "\n";
        pir="";

    }
}

else{

    for(let linha = 1; linha <=(n/2 +0.5) ; linha += 1 ){
       
        for(let esq = 1; esq <= esp/2  ; esq = esq + 1 ){
            pir = pir + ' ';
            
        }
        esp = esp - 2; 

        for(let i = 1; i <= ast ; i = i + 1 ){
            pir = pir + '*';
                
        } 
        ast = ast +2;

        for(let dir = 1; dir <= espdir/2 ; dir = dir +1 ){
            pir = pir + ' ';
            
        }
        espdir = espdir -2;
        
        console.log(pir);
        "\n";
        pir="";






    
}