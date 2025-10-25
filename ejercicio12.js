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
    let notas=[];
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
        if (notas[i]>promedio) porEncima++;
    }
    let opcion2;
    do {
      opcion2 = parseInt(prompt(
        "===== MENÚ DE ESTADISTICAS =====\n" +
        "1. Promedio\n" +
        "2. Valor maximo\n" +
        "3. Valor minimo\n" +
        "4. Cantidad de pares e impares\n" +
        "5. Cuantos estan por encima del promedio\n" +
        "6. Volver al menu principal\n" +
        "===========================\n" +
        "Elija una opción:"
      ));

      if (opcion2 == 1) alert(`El promedio de notas es: ${promedio}`);
      else if (opcion2 == 2) alert(`La nota maxima es: ${maximo}`);
      else if (opcion2 == 3) alert(`La nota minima es: ${minimo}`);
      else if (opcion2 == 4) alert(`Notas pares: ${contPares}\nNotas impares: ${contImpares}`);
      else if (opcion2 == 5) alert(`${porEncima} notas estan por encima del promedio`);
      else if (opcion2 == 6) alert(`Volviendo al menu principal...`);
      else alert(`Ingrese opcion valida`);
    } while (opcion2 != 6);
  }
  else if (opcion == 2){
    let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
    let fin = parseInt(prompt("Ingrese el final del rango:"));
    let pares = 0, impares = 0;

    for (let i=inicio; i<=fin; i++) {
      if (i%2 == 0) pares++;
      else impares++;
    }
    alert(`Entre ${inicio} y ${fin}: Hay ${pares} pares y ${impares} impares.`);
  }
  else if (opcion == 3){
    let numero = parseInt(prompt("Ingrese numero para ver su tabla: "));
    let tabla="";
    for (let i=0; i<12; i++) {
      tabla+=(`${numero} x ${i+1} = ${numero*(i+1)}\n`);
    }
    alert(tabla);
  }
  else if (opcion == 4){
    alert("Saliendo del programa...");
  }
  else alert("Opcion invalida.")
} while (opcion != 4);