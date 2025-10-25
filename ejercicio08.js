let limite = parseInt(prompt("Ingrese un numero: "));
let numerosPrimos="";
for (let num=2; num<=limite; num++){
    let contador=0;
    for (let i=1; i<=num; i++){
        if (num%i==0){
            contador++;
        }
    }
    if (contador==2){
        numerosPrimos+=(`${num} `);
    }
}
alert(`Numeros primos entre 1 y ${limite} son :\n${numerosPrimos}`);