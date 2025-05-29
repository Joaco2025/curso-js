//Bucles
//For Loop

//Imprimir números del 1 al 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Recorrer un string
let palabra = "JavaScript"
for(let j = 0; j < palabra.length; j++) {
    console.log(palabra[j]);
}

//While Loop
let contador = 0
while (contador < 3) {
    console.log("El contador es: " + contador)
    contador++;
}

/*
let numSecreto = 7;
let adivinanza = parseInt(prompt("Adivina el numero Secreto!! (del 1 al 10): "));

while (numSecreto !== adivinanza) {
    console.log("¡Fallaste! Intenta de nuevo.");
    adivinanza = parseInt(prompt("Adivina el numero Secreto!! (del 1 al 10): "));
}

console.log("🎉 ¡Le atinaste, felicidades crack!");
*/

//Do While
let i = 0
do {
    console.log("el valor de i es: " + i)
    i++;
} while (i < 0) //la condición es false, pero se ejecuta una vez
//Output es: el valor de i es: 0

//break y continue

//Ejemplo de break
for (let k = 1; k <= 10; k++) {
    if (k === 5) {
        break;
    }
    console.log("break: " + k)
}
//Output: 1,2,3,4

//ejemplo de continue
for (let l = 1; l <= 5; l++) {
    if (l === 3) {
        continue; //salta la iteración cuando l = 3
    }
    console.log("Continue: " + l)
}
//Output: 1,2,4,5

//Ejercicios
//1. Usa un bucle for para imprimir los numeros pares del 2 al 10.
//2. Usa un bucle while para calcular la suma de los numeros del 1 al 100. 
//3. Escribe un bucle for que imprima los numeros del 1 al 7. Si el numero es 4, usa continue para saltarlo. Si el numero es 6, usa break para detener el bucle.

//Ejercicio 1
for (let k = 1; k <= 10; k++) {
    if (k % 2 === 0) {
        console.log("Pares: " + k)
    }
}
//Output: 2,4,6,8,10

//Ejercicio 2
let contadorWhile = 1
let suma = 0
while (contadorWhile <= 100){
    suma += contadorWhile
    contadorWhile ++;
    console.log("Total de la suma: " + suma)
}

//Ejercicio 3
for (let x = 1; x <= 7; x++ ){
    if (x === 4){
        continue;
    }
    if (x === 6) {
        break;
    }
    console.log("Los números son: " + x)
}
//Output: 1,2,3,5