let monto = parseInt(prompt("Que monoto desea retirar (min 10): "));
let billetes100 = parseInt(monto/100);
let sobra1 = monto%100;
let billetes50 = parseInt(sobra1/50);
let sobra2 = sobra1%50;
let billetes20 = parseInt(sobra2/20);
let sobra3 = sobra2%20;
let billetes10 = parseInt(sobra3/10);
alert(`Monto a retirar ${monto}\n${billetes100} Billetes de 100\n${billetes50} Billetes de 50\n${billetes20} Billetes de 20\n${billetes10} Billetes de 10`);