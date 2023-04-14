export class Alumno {
    constructor(nombre, dni) {
        this.nombre = nombre
        this.dni = dni
    }
    mostrar() {
        console.log("nombre: ", this.nombre, '\n', "DNI: ", this.dni)
    }
}
