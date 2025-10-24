//Ejercicio02
let edad = parseFloat(prompt("Ingrese edad: "));
if (edad>0 && edad<120){
    if (edad<12) alert(`Usted es un niño`);
    else if (edad>=12 && edad<=17) alert(`Usted es un adolescente`);
    else if (edad>=18 && edad<=59) alert(`Usted es un adulto`);
    else if (edad>=60) alert(`Usted es un adulto mayor`);
} else {
    alert("Ingrese edad normal");
}