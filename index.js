import {concat_invert} from "./modulo_string.js"
import {suma, resta, multiplicacion, area_circulo} from "./modulo_matematica.js"

const s1 = "Escuela"
const s2 = "ORT"

console.log("Texto de entrada: ", s1, 'y', s2)
console.log("Texto de salida: ", concat_invert(s1,s2));

console.log("suma(1, 6) = ", suma(1, 6))
console.log("resta(8, 2) = ", resta(8, 2))
console.log("multiplicacion(0.5, 7) = ", multiplicacion(0.5, 7))
console.log("area_circulo(10) = ", area_circulo(10))
