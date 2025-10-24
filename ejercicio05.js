let contImpares=0, contPares=0;
for (let i=0; i<10; i++){
    let num = parseFloat(prompt("Ingrese un numero: "));
    if (num%2==1){
        contImpares++;
    } else{
        contPares++;
    }
}
alert(`Cantidad de numeros pares: ${contPares}`);
alert(`Cantidad de numeros impares: ${contImpares}`);