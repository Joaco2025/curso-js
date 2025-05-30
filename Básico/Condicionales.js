//Estructura If

let temperatura = 25;

if (temperatura > 30) {
    console.log("Por la chucha que hace calor");
} else if (temperatura >= 20) {
    console.log("ta agradable a fuera, andate a tocar pasto");
} else {
    console.log("Por la chucha que hace frio");
}

let edad = 16;
if (edad >= 18) {
    console.log("culeable");
} else {
    console.log("Carcel");
}

//Operador Ternario
let age = 20;
let mensaje = age >= 18 ? "Eres mayor de edad. " : "Eres menor de edad. ";
console.log(mensaje); // "Eres Mayor de edad."

let estaLogueado = true;
let botonTexto = estaLogueado ? "Cerrar Sesion" : "Iniciar Sesión"
console.log(botonTexto); // "Cerrar Sesión"

//Switch
let diaDeLaSemana = "Martes";

switch(diaDeLaSemana) {
    case "Lunes":
    console.log("Otro lunes, chale");
    break; // Importante: Salir del switch después de encontrar una coincidencia
    case "Martes":
    case "Miercoles": // Puedes agrupar casos que hacen lo mismo
    console.log("Estamos a Mitad de Semana");
    break;
    case "Jueves":
    console.log("Ya casi es beviernes");
    break;
    case "Viernes": 
    console.log("VIERNESSSSSSSSSSSSSSSS");
    break;
    case "Sabado":
    case "Domingo": // Volvemos a agrupar casos que hacen lo mismo
    console.log("Fin de Semana!!");
    break;
    default:
    console.log("Dia no válido");
}

//Ejercios
//1. Crea una variable puntuacion. Si es mayor o igual a 90, imprime ”Excelente”. Si esta entre 70 y 89, imprime ”Bien”. De lo contrario, imprime ”Necesitas mejorar”.
//2. Usa el operador ternario para asignar a una variable estadoLuz el valor ”Encendido” si estaPrendida es true, de lo contrario ”Apagado”.
//3. Crea una variable fruta con el valor ”Manzana”. Usa un switch para imprimir: ”Es una fruta roja” si es ”Manzana” o ”Cereza”, ”Es una fruta 
// citrica” si es ”Naranja” o ”Limon”, y ”No se reconoce la fruta” en otro caso.

//Ejercicio 1
let puntuacion = 85;
if (puntuacion >= 90){
    console.log("Excelente viejo");
} else if (puntuacion >= 70) {
    console.log("Bien bien");
} else {
    console.log("necesitas mejorar");
}

//Ejercicio 2
let estaPrendida = false;
let estadoLuz = estaPrendida ? "Encendido" : "Apagado"
console.log(estadoLuz); //Apagado

//Ejercicio 3
let fruta = "Manzana";
switch(fruta) {
    case "Manzana":
    case "Cereza": // Puedes agrupar casos que hacen lo mismo
    console.log("Es una fruta Roja");
    break;

    case "Naranja":
    case "Limon": // Volvemos a agrupar casos que hacen lo mismo
    console.log("Es una fruta citrica");
    break;

    default:
    console.log("No se reconoce la fruta");
}