//Arreglos y Objetos
//Arreglos

//Declaración de un arreglo
let numeros = [1,2,3,4,5]
let frutas = ["Manzana","Banana","Cereza"]
let mixto = [1,"Hola",true,{clave: "valor"}] //los arreglos pueden contener diferentes tipos

//Acceder a elementos por indice (los indices empiezan en 0)
console.log(numeros[0]) //1
console.log(frutas[1]) //Banana

//Modificar Elementos
frutas[0] = "Pera"
console.log(frutas) // [" Pera " , " Banana " , " Cereza "]

//Propiedad length (longitud del arreglo)
console.log(numeros.length) //5

//Agregar elementos
frutas.push("Uva") //Añade el elemento al final del array
console.log(frutas)

//Eliminar el ultimo elemento
let ultimaFruta = frutas.pop()
console.log(ultimaFruta) //Uva
console.log(frutas) //[" Pera " , " Banana " , " Cereza "]

//Recorrer un arreglo con un bucle for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//Recorrer un arreglo con un for... of (más moderno y sencillo)
for (const fruta of frutas) {
    console.log(fruta)
}

//Objetos

//Declaración de un objeto
let persona = {
    nombre: "Alicia",
    edad: 28,
    ciudad: "Ciudad de México",
    estaCasado: false,
    hobbies: ["leer","Jugar Ajedrez"], //Un arreglo dentro de un objeto
    saludar: function() {
        console.log("Hola, mi nombre es", this.nombre)
    }
}

console.log(persona)

//Acceder a propiedades (dot notation o bracket notation)
console.log(persona.nombre); //Alicia
console.log(persona.edad) //28
console.log(persona.ciudad) // Ciudad de México

//Modificar las propiedades
persona.ciudad = "Los Angeles"
console.log(persona.ciudad) // Los Angeles

//Añadir nuevas propiedades
persona.email = "Alicia@xvideos.com"
console.log(persona.email)

//Eliminar Propiedades
delete persona.estaCasado
console.log(persona) //estaCasado ya no está

//Llamar a un método del objeto
persona.saludar()

//Recorrer un objeto (for... in)
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

//Ejercicios
//1. Crea un arreglo llamado colores con al menos 3 colores. Anade un nuevo color al final, luego imprime el segundo color y la longitud del arreglo.
//2. Crea un objeto llamado libro con las propiedades titulo, autor y añoPublicacion. Imprime el titulo y el año. Luego, anade una propiedad editorial y asignale un valor.
//3. Recorre el arreglo colores y muestra cada color en la consola.

//Ejercicio 1
let colores = ["Azul","Rojo","Negro",]
colores.push("Morado")
console.log(colores)
console.log("El Segundo Color es: " + colores[1] , ", El largo del arreglo es:",colores.length)

//Ejercicio 2
let libro = {
    titulo: "Nacidos de la Bruma",
    autor: "Brandon Sanderson",
    anioPublicacion: "2007",
}

console.log(libro.titulo,libro.anioPublicacion)
libro.editorial = "Planeta"
console.log(libro)

//Ejercicio 3
for (const color of colores) {
    console.log(color)
}
