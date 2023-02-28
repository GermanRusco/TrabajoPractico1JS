//  Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Ingrese una frase: ");
let numeroLetras = frase.length;
let i;
for(i=0;i<numeroLetras;i++){
    if(frase.substr(i,1)==="a" || frase.substr(i,1)==="e" || frase.substr(i,1)==="i" || frase.substr(i,1)==="o" || frase.substr(i,1)==="u" || frase.substr(i,1)==="A" || frase.substr(i,1)==="E" || frase.substr(i,1)==="I" || frase.substr(i,1)==="O" || frase.substr(i,1)==="U"){
        document.write(frase.substr(i,1));
    }
}