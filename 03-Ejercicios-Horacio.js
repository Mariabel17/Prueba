// La ruleta rusa:
// Crear un juego en Javascript de la ruleta rusa. El juego de la ruleta rusa debe tener 2 jugadores y una posibilidad 1 en 6 de que alguno pierda.
// El desarrollo del proyecto depende puramente de la forma de interpretación de desarrollador. Osea que puedes buscar como vos quieras la mejor forma de resolver el ejercicio






// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function ruletaRusa() {
//     let bala = Math.floor(Math.random() * 6) + 1;
//     for (let i = 1; i <= 6; i++) {
//         console.log(`Ronda número ${i}`)

//         let disparo = Math.floor(Math.random() * 6) + 1;

//         if (bala === disparo) {
//             console.log("Mala suerte, estás muerto")
//             break;
//         } else {
//             console.log("Buena suerte")
//         }

//     }

// }

// ruletaRusa()



/*
 * Dado un listado de números, encuentra el SEGUNDO más grande
 */

// let num = [1, 2, 4, 10, 20, 40, 60, 280]
// let secondMax = null

// let maxNumber = Math.max(...num)
// for (let i = 0; i < num.length; i++){
//     if (num[i] < maxNumber && (secondMax === null || num[i]>= secondMax) ){
//         secondMax = num[i] 
//     }
// }
// console.log(secondMax)

// Otra forma de hacerlo para evitar hacer tantas veces el bucle   const compareNumbers = (a, b) => a - b;  menor a MAYOR        = (a, b) => b - a;   MAYOR a menor
// let num = [1, 2, 4, 10, 20, 40, 60, 280]

// num.sort((a, b)=> b - a) // ordena de menor a mayor
// let secondMax = num[1] // num[0] Muestra la pimera posición que será el múmero más grande 280
// console.log(secondMax)




/*
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

let text = "¿Qué te parece el reto?"

function asteriskFrame(text){
let word = text.split(" ")


}


