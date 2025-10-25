let limite = parseInt(prompt("Ingrese un limite: "));
let suma=0;
for (let i=1; i<=limite; i++){
    if (i%5!=0){
        suma+=i;
    }
}
alert(`La suma entre 1 y ${limite}, sin multiplos de 5 es ${suma}`);