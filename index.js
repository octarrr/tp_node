import {concat_invert} from "./modulo_string.js"
import * as matematica from "./modulo_matematica.js"
import {Alumno} from "./Alumno.js"
import {copiar} from "./modulo_manejofs.js"
import {parsearUrl} from "./modulo_url.js"
import {obtener_moneda} from "./modulo_paises.js"
import sql from "mssql"
import {dbconfig} from "./dbconfig.js"

const s1 = "Escuela"
const s2 = "ORT"

console.log("Texto de entrada: ", s1, 'y', s2)
console.log("Texto de salida: ", concat_invert(s1,s2));

let a = new Alumno("juan", 12345678)
let b = new Alumno("pepe", 87654321)
a.mostrar()
b.mostrar()

console.log("suma(1, 6) = ", matematica.suma(1, 6))
console.log("resta(8, 2) = ", matematica.resta(8, 2))
console.log("multiplicacion(0.5, 7) = ", matematica.multiplicacion(0.5, 7))
console.log("area_circulo(10) = ", matematica.area_circulo(10))

copiar("./t1.txt", "./t2.txt")

console.log(parsearUrl("asdU"))

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtener_moneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtener_moneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

let id = 1
let pool = await sql.connect(dbconfig);
let result = await pool.request().input("pId", sql.Int, id).query("SELECT * FROM Pizza WHERE Id=@pId");

console.log(result);