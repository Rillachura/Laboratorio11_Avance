//Ejercicio11
let num = prompt(
    "ES NUMERO DE ARMSTRONG??\n"+
    "Ingrese un numero:"
);
let suma=0;
for (let i=0; i<num.length; i++){
    let cifra=parseInt(num.charAt(i));
    suma+=Math.pow(cifra,num.length);
}
if (suma==num){
    alert(`${num} es un numero de Armstong`);
}
else {
    alert(`${num} no es un numero de Armstong`);
}