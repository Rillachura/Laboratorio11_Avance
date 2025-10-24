//Ejercicio01
let suma=0;
let nota=0;
for (let i=1; i<6; i++){
    nota = parseFloat(prompt("ingrese nota "+i+": "));
    if (nota<=20 && nota>=0){
        suma+=nota;
    } else{
        alert(`ingrese nota valida`);
        break;
    }
}
alert(`el promedio es: ${suma/5}`);