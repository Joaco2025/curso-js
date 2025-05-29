//Funciones

//1.- Declaración de Funciones
function saludar () {
    console.log("Hola Mundo, desde una función!!")
}

//Llama a la función para que se ejecute
saludar() //Hola desde una función

// 2. Función con parametros
function saludarA (nombre) {
    console.log("Hola, " + nombre + "!")
}

saludarA("Pedrito") //Hola, Pedrito!
saludarA("Juanito") //Hola, Juanito!

//3. Función con multiples parametros y un valor de retorno
function sumar (a,b) {
    let resultado = a + b
    return resultado //Devuelve el valor
}

let sumaNumeros = sumar(5,3)
console.log(sumaNumeros) // 8

let otraSuma = sumar(10,20)
console.log(otraSuma) // 30

//Expresiones de Funciones (Function Expressions)
//Puedes asignar una función a una variable
const multiplicar = function(num1,num2){
    return num1 * num2
}

let producto = multiplicar(4,6)
console.log(producto) //24

//Parametros por defecto
//Puedes dar valores por defecto a los parametros de una función
function saludarConDefault (nombre = "Invitado") {
    console.log("Hola, " + nombre + "!")
}

saludarConDefault("Juan") //Hola, Juan!
saludarConDefault() // Hola, Invitado!

//Ejercicios
//1. Crea una funcion llamada esPar que reciba un numero y devuelva true si es par, y false si es impar.
//2. Escribe una funcion llamada obtenerMayor que tome dos numeros y de-vuelva el mas grande.
//3. Crea una funcion generarMensaje que reciba un nombre y una edad. Debe devolver un string como ”Hola, [nombre]. Tienes [edad] anios.”.

//Ejercicio 1

function esPar(c) {
    if (c % 2 === 0) {
        numPar = true
    } else {
        numPar = false
    }
    return numPar
}

console.log(esPar(4))
console.log(esPar(5))

//Ejercicio 2
function obtenerMayor (a,b){
    if (a > b) {
        mayor = a
    } else {
        mayor = b
    }
    return mayor
}

console.log(obtenerMayor(6,5))
console.log(obtenerMayor(1,2))

//Ejercicio 3
function generarMensaje(nombre,edad) {
    console.log("Hola, " + nombre + " Tienes " + edad + " años")
}

generarMensaje("Joaquin",17)