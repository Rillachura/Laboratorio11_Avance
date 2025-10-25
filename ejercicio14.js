//Ejercicio14
let opcion;
let total = 0;
let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo:"));

do {
    opcion = parseInt(prompt(
        "=====SUPERMERCADO=====\n" +
        "1. Agregar producto al carrito.\n" +
        "2. Mostrar boleta y salir.\n" +
        "=========================\n" +
        "Elija una opción:"
    ));

    if (opcion == 1) {
        let precio = parseFloat(prompt("Ingrese precio del producto:"));
        if (precio > 0) {
            if (total + precio <= presupuesto) {
                total += precio;
                alert(`Producto agregado. Total Parcial: S/.${total}`);
            } else {
                alert("No puede agregar este producto. Supera su presupuesto.");
            }
        } else {
            alert("Ingrese un precio válido.");
        }
    }

    else if (opcion == 2) {
        let descuento = 0;
        let mensaje = "";

        if (total > 100) {
            descuento = total * 0.10;
            mensaje = "Tiene un descuento del 10%";
        }
        else if (total >= 50 && total <= 100) {
            descuento = total * 0.05;
            mensaje = "Gana un cupón de 5%";
        }
        else if (total < 50) {
            mensaje = "No aplica un descuento";
        }

        let totalFinal = total - descuento;

        alert(
            `Total Parcial: S/.${total}\n` +
            `${mensaje}\n` +
            `Descuento aplicado: S/.${descuento}\n` +
            `Total final a pagar: S/.${totalFinal}`
        );
    }

    else alert("Opción inválida.");
    
} while (opcion != 2);