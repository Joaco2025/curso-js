//Operadores
//Operadores Aritmeticos

let a = 10;
let b = 3;

//Suma
console.log(a + b);

//Resta
console.log(a - b);

//Multiplicación
console.log(a * b);

//División
console.log(a / b);

//Resto
console.log(a % b);

//Exponenciación
console.log(a ** b);

//Operadores de Asignación

//+=
let x = 5;
x += 3; //ahora es 8 (5+3)
console.log(x);

// /=
let y = 10;
y /= 2; //ahora es 5 (10/2)
console.log(y);

//Operadores de Comparación
console.log(5 == 5); //true

console.log(5 == "5"); //true, coercion de tipo, el string "5" se convierte a numero 5)

console.log(5 === "5"); //false (compara valor y tipo, numero 5 no es estrictamente igual a string "5")

console.log( 10 != 5); //true

console.log(10 !== "10"); //true (10 es number, "10" es string)

console.log(7 > 3); //true

console.log(2 <= 2) //true

//Operadores lógicos

let edad = 20;
let tieneLicencia = true;

console.log(edad >= 18 && tieneLicencia); //true (ambas son verdaderas)

let esFeriado = false;
let esFinDeSemana = true;

console.log(esFeriado || esFinDeSemana); //true (al menos una es verdadera)

let estaLloviendo = false;
console.log(!estaLloviendo); //true (niega false, lo cual lo vuelve true)

//Ejercicios
//1. Declara dos numeros, num1 = 15 y num2 = 4. Realiza y muestra en consola la suma, resta, multiplicacion, division y el modulo.
//2. Declara una variable contador = 0. Usa el operador += para sumarle 5, luego el operador -= para restarle 2. Imprime el resultado.
//3. Compara si "Hola" es estrictamente igual a "hola".
//4. Comprueba si un numero z = 10 es mayor que 5 Y menor o igual que 10. 

let num1 = 15;
let num2 = 4;

//Ejercicio 1
console.log(num1 + num2); //Suma
console.log(num1 - num2); //Resta
console.log(num1 * num2); //Multiplicación
console.log(num1 / num2); //División
console.log(num1 % num2); //Modulo

//Ejercicio 2
let contador = 0;
contador += 5;
contador -= 2;
console.log(contador);

//Ejercicio 3
console.log("Hola" === "hola");

//Ejercicio 4
let z = 10;
console.log((z > 5) && (z <= 10));
