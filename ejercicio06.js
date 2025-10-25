//Ejercicio06
let numero = parseInt(prompt("Ingrese numero para ver su tabla: "));
let tabla="";
for (let i=0; i<12; i++){
    tabla+=(`${numero} * ${i+1} = ${numero*(i+1)}\n`);
}
alert(tabla)