//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = prompt("Escribe un número: ");
let numero2 = prompt("Escribe otro número: ");
if(numero1>numero2){
    document.write("El primer número es mayor.");
}
else if(numero1<numero2){
    document.write("El segundo número es mayor.");
} else{
    document.write("Ambos números son iguales.");
}
