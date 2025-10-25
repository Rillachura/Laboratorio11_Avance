//Ejercicio13
let opcion;
let total=0;
do {
    opcion = parseInt(prompt(
        "=====SUPERMERCADO=====\n" +
        "1. Agregar producto al carrito.\n" +
        "2. Mostrar boleta y salir.\n" +
        "=========================\n" +
        "Elija una opcion:"
    ));

    if (opcion == 1){
        let precio = parseFloat(prompt("Ingrese precio del producto."));
        if (precio > 0) {
            total+=precio
            alert(`Producto agregado. Total Parcial: S/.${total}`);
        } else {
            alert("Ingrese precio valido.")
        }
    }

    else if (opcion ==2){
        let descuento=0;
        let mensaje="";

        if (total>100) {
            descuento=total*0.10;
            mensaje=("Tiene un descuento del 10%");
        }
        else if (total>=50 && total<=100){
            descuento=total*0.05;
            mensaje=("Gana un cupon de 5%");
        }
        else if (total<50){
            mensaje=("No aplica un descuento");
        }
        let totalFinal=total-descuento;
        alert(
            `Total Parcial: S/.${total}\n` +
            `${mensaje}\n` +
            `Descuento aplicado: ${descuento}\n` +
            `Total final a pagar: S/.${totalFinal}`
        );
    }
    else alert("Opcion invalida.");
} while (opcion != 2);