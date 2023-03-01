//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

let numero = parseInt(prompt("Escriba un número: "));
if(numero%3===0){
    document.write("El número es divisible en 3");
} else{
    document.write("El número no es divisible en 3");
}