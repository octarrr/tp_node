import {concat_invert} from "./modulo_string.js"
import * as matematica from "./modulo_matematica.js"
import {copiar} from "./modulo_manejofs.js"
import { parsearUrl } from "./modulo_url.js"

const s1 = "Escuela"
const s2 = "ORT"

console.log("Texto de entrada: ", s1, 'y', s2)
console.log("Texto de salida: ", concat_invert(s1,s2));

console.log("suma(1, 6) = ", matematica.suma(1, 6))
console.log("resta(8, 2) = ", matematica.resta(8, 2))
console.log("multiplicacion(0.5, 7) = ", matematica.multiplicacion(0.5, 7))
console.log("area_circulo(10) = ", matematica.area_circulo(10))

// copiar("./t1.txt", "./t2.txt")

console.log(parsearUrl("asdU"))
