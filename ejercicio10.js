let opcion;

do {
  opcion = parseInt(prompt(
    "MENÚ DE OPCIONES:\n" +
    "1. Calcular área del círculo\n" +
    "2. Calcular área del rectángulo\n" +
    "3. Salir\n" +
    "Elige una opción (1-3):"
  ));
  if (opcion == 1) {
    let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    let area = Math.PI*radio*radio;
    alert(`El área del círculo es: ${area}`);
  }
  else if (opcion == 2) {
    let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
    let area = base*altura;
    alert(`El área del rectángulo es: ${area}`);
  }
  else if (opcion == 3) {
    alert("Saliendo del programa...");
  }
  else {
    alert("Opción no válida. Intenta de nuevo.");
  }
} while (opcion !== 3);