// 1. document.getElementById() - Selecciona un elemento por su ID (debe ser unico)
const titulo = document.getElementById("titulo");
console.log(titulo); //Imprime el elemento h1 por completo

// 2. document.querySelector() - Selecciona el primer elemento que coincide con un selector CSS
const primerParrafo = document.querySelector(".parrafo");
//Selecciona el primer elemento con la clase "parrafo"
console.log(primerParrafo);

// Botón por etiqueta
const boton = document.querySelector("button"); //Selecciona el primer boton
console.log(boton);

//3. document.querySelectorAll() - Selecciona TODOS los elementos que coinciden con un selector CSS
const todosLosParrafos = document.querySelectorAll(".parrafo");
console.log(todosLosParrafos); //Devuelve un NodeList (parecido a un arreglo)

// Puedes recorrer un NodeList con forEach o un for...of
todosLosParrafos.forEach(function(parrafo) {
    console.log(parrafo.textContent)
})

//Cambiar contenido de texto
titulo.textContent = "MIRÁ MAMÁ, MANINUÉ EL TITULO DESDE JAVASCRIPT"

//Cambiar Atributos
boton.setAttribute("id", "miBoton") //Añade o cambia el atributo id
console.log(boton.id) //miBoton

// Cambiar estilo (inline styles)
//cambia color del titulo
titulo.style.color = "blue"
//cambia color del fondo
titulo.style.background = "lightgray"
//cambia el padding
titulo.style.padding = "10px"

//Añadir/Quitar clases (más común y recomendado para  estilos)
titulo.classList.add("resaltado") //Asume que tienes una clase CSS resltado
// titulo.classList.remove (" resaltado ");
// titulo.classList.toggle (" activo "); // Si esta , la quita, si no esta , la pone

//Crear y Eliminar Elementos
//Crear un nuevo elemento
const nuevoParrafo = document.createElement("P")
nuevoParrafo.textContent = "Este parrafo fue creado dinamicamente desde JavaScript, es genial no?"

//Añadir el nuevo elemento al body
document.body.appendChild(nuevoParrafo)

//Eliminar un elemento
const parrafoAEliminar = document.querySelector(".parrafo") //selecciona el primer parrafo
if (parrafoAEliminar)
{
    parrafoAEliminar.remove() //Elimina el elemento
}
//tambien puedes eliminarlo desde su padre: parrafoAEliminar.parentNode.removeChild(parrafoAEliminar)

//Ejercicios Practicos
//1. Modifica el contenido de un <h1> con el ID titulo a ”Mi Pagina Interactiva”.
//2. Anade la clase destacado a un parrafo con la clase articulo.
//3. Crea un nuevo boton con el texto ”Nuevo Boton” y anadelo al final del <body>.
//4. Elimina el primer elemento <p> de tu pagina.

//Ejercicio 1
const h1 = document.getElementById("titulo") //Agarro el h1 del index, y selecciono el id de "titulo"
h1.textContent = "Mi Pagina Interactiva" //acá cambio el contenido del titulo

//Ejercicio 2
nuevoParrafo.classList.add("destacado")

//Ejercicio 3
const nuevoBoton = document.createElement("button")
nuevoBoton.setAttribute("id","nuevoBoton")
nuevoBoton.textContent = "Soy un nuevo botón!!"

document.body.appendChild(nuevoBoton)

//Ejercicio 4
const eliminarP = document.querySelector("p")
if(eliminarP)
{
    eliminarP.remove()
}

