/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */



/*
function anagrama(word1, word2) {
let letters1= word1.split('').sort().join('')
let letters2= word2.split('').sort().join('')
if (letters1 !== letters2) {
    return false
} else {
    return letters1 === letters2
}
}
console.log(anagrama("frase", "fresa"))
console.log(anagrama("amor", "roma"))
console.log(anagrama("roma", "gato"))
console.log(anagrama("sapo", "paso"))



for (let i = 0; i <= 100; i++) {
    if (i % 3===0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    }   else if (i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }       
}

*/

/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


/*
let triangulo = {
    base: 6,
    h: 3
}
let cuadrado = {
    lado: 4
}
let rectangulo = {
    base: 10,
    altura: 5
}
function areaPoligono (poligono) {
     if (poligono.base && poligono.h) {
return poligono.base * poligono.h / 2 
     }
     if (poligono.lado) {
return poligono.lado * poligono.lado
     }
     if (poligono.base && poligono.altura) {
return poligono.base * poligono.altura
     }
else {
        return "No es un polígno dado"
     }
}

 console.log(areaPoligono(triangulo))
 console.log(areaPoligono(cuadrado))
 console.log(areaPoligono(rectangulo))

 */
 
 



//   2. Invertir cada palabra en una oración 
//  "Un perro en mi casa"  "nu orrep ne im asca"
//  



/*
let phrase = " No es el polígono dado"

 function sizePhrase (phrase) {
    for (let i = phrase.length -1; i >=0; i--)
        let word = phrase[i]

 }
   

console.log(sizePhrase(" No es el polígono dado"))




let phrase = "Un perro en mi casa" 
let words = phrase.split(" ")
let invertidas= []

for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let invertida = word.split("").reverse().join("")
    invertidas.push(invertida)
}
let result = invertidas.join(" ")
console.log(result)

*/



/*

function hello(name){
    console.log(`hola ${name} como estás`)
}
let result = hello("hori")

console.log("la respueta es:", result)


*/



// 3. Cuenta cuantas veces se repiten las letras de esta frase

// let frase = "hola como estas"
// let conteo = {}

// for (let i = 0; i < frase.length; i++){
//     let letras = frase[i]
//     if(letras == " "){
//         continue
//     }else{
//     if (conteo[letras] >= 1) {
//         conteo[letras] = conteo[letras] + 1
//     }else{
//         conteo[letras] = 1
//         }
//     }
//     }
    

// console.log(conteo)




/*1. Una oración busca el tamaño de la última palabra de esa oración
 " No es el polígono dado"
*/

// let frase = "No es el polígono dado"
// let lastWord = " "

// for (let i = frase.length -1; i >=0; i--) {
//    let word = frase[i]
//    if (word === (" ")) {
//     break
//    }




let frutas = ["plátano", "melón", "fresa"]

for (let i = 0; i<frutas.length; i++) {
    console.log(frutas[i])

    if (frutas[i] == "melón"){
console.log("Es mi preferida")
    }
}