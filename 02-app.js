//Ejercicios básicos

// 🧩 Ejercicio 1: variables y operadores

// Crea un programa que:

// Pida al usuario su nombre y su edad.

// Guarde esos datos en dos variables.

// Muestre en consola un mensaje como este: Hola, Ana. El año que viene tendrás 26 años.

// let nombre = prompt("¿Cómo te llamas?")
// let age = Number(prompt("¿Cuámtos años tienes?"))
// console.log(`Hola, ${nombre}. El año que viene tendrás ${age + 1} años.`)
// El prompt() es una function incorporada en el navegador, no es compatible con Node. Manda alerta en el navegador para pedir los datos en una ventana emergente.

// let nombre = "Maribel"
// let age = 25
// console.log(`Hola, ${nombre}. El año que viene tendrás ${age + 1} años.`)


// 🧩 Ejercicio 2: condicional simple

// Crea un programa que diga si una persona es mayor o menor de edad.

// Declara una variable edad y asígnale un número.

// Usa un condicional if para comprobar:

// si edad es mayor o igual a 18 → muestra "Eres mayor de edad"

// si no → muestra "Eres menor de edad"

// 🧩 Ejercicio 3: condicional con varios casos

// Queremos que el programa diga si una persona es:

// menor de edad (menos de 18 años)

// adulta (entre 18 y 65)

// o jubilada (más de 65)

let age = 55
if(age <= 18){
    console.log("Eres menor de edad")
   } else if ( age >= 18 && age <= 65){
console.log("Eres adulto")
   } else{
console.log("Eres un jubilado")
   }
  