let monto = parseInt(prompt("Que monoto desea retirar (min 10): "));
let billetes100 = parseInt(monto/100);
let billetes50 = parseInt((monto-(billetes100*100)))/50;
let billetes20 = parseInt((monto-((billetes100*100)+(billetes50*50))))/20;
let billetes10 = parseInt((monto-((billetes100*100)+(billetes50*50)+(billetes20*20))))/10;
alert(`Billetes de 100: ${billetes100}\nBilletes de 50: ${billetes50}\nBilletes de 20: ${billetes20}\nBilletes de 10: ${billetes10}`);