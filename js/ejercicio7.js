//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt("Escriba el primer número: "));
let numero2 = parseInt(prompt("Escriba el segundo número: "));
let numero3 = parseInt(prompt("Escriba el tercer número: "));

if(numero1>numero2 && numero1>numero3){
    document.write("El primer número es el mayor y vale " + numero1);
}
else if(numero1<numero2 && numero2>numero3){
    document.write("El segundo número es el mayor y vale " + numero2);
}
else if(numero1<numero3 && numero2<numero3){
    document.write("El tercer número es el mayor y vale " + numero3);
}
else if (numero1 == numero2 && numero1 == numero3){
    document.write("Los tres números son iguales y valen " + numero1);
}
else if (numero1 == numero2 && numero1>numero3){
    document.write("El primer y segundo número son igualmente mayores y valen: " + numero1);
}
else if (numero1 == numero3 && numero1>numero2){
    document.write("El primer y tercer número son igualmente mayores y valen: " + numero1);
}
else if (numero2 == numero3 && numero2>numero1){
    document.write("El segundo y tercero número son igualmente mayores y valen: " + numero2);
}