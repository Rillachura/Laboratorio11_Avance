let opcion;
do {
  opcion = parseInt(prompt(
    "===== MENÚ PRINCIPAL =====\n" +
    "1. Calcular estadísticas de N notas\n" +
    "2. Contar números pares e impares en un rango\n" +
    "3. Generar una tabla de multiplicar\n" +
    "4. Salir\n" +
    "===========================\n" +
    "Elija una opción:"
  ));
  if (opcion == 1) {
    let n = parseInt(prompt("Cuantas notas desea ingresar?"));
    let suma=0, maximo=0, minimo=20, contPares=0, contImpares=0;
    for (let i=1; i<=n; i++) {
        let nota = parseFloat(prompt(`Ingrese nota ${i}`));
        notas[i-1] = nota;
        suma+=nota;
        if (nota>maximo) maximo=nota;
        if (nota<minimo) minimo=nota;
        if (nota%2==0) contPares++;
        else contImpares++;
    }

    let promedio = suma/n;
    let porEncima = 0;
    for (let i=0; i<n; i++){
        if (nota[i]>promedio) porEncima++;
    }

    let opcion2 = parseInt(prompt(
        "===== MENU DE ESTADISTICAS =====\n" +
        "1. Promedio\n" +
        "2. Valor maximo\n" +
        "3. Valor minimo\n" +
        "4. Cantidad de pares e impares\n" +
        "5. Cuantos estan por encima del promedio\n"
    ));

    if (opcion2 == 1) alert(`El promedio de notas es ${promedio}`);
    else if (opcion2 == 2) alert(`La nota maxima es ${maximo}`);
    else if (opcion2 == 3) alert(`La nota minima es ${minimo}`);
    else if (opcion2 == 4) alert(`Notas pares ${contPares}\nNotas impares ${contImpares}`);
    else if (opcion2 == 5) alert(`${porEncima} Estan por encima del promedio`)
  }
} while (opcion !== 9);