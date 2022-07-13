const plan = []
const agenda = []

class Planes {
    constructor(tipoPLan, precio, experiencia){
        this.tipoPLan = tipoPLan
        this.precio = precio
        this.experiencia = experiencia
    }
}

// Planes 

const profesional = new Planes("Profesional", 4.99, "Profesional o licenciado en psicología, con más de 2 años de experiencia.")
const especialista = new Planes("Especialista", 7.99, "Psicolog@ con más de 5 años de experiencia y especialización en psicología clínica. O psicolog@ con más de 10 años de experiencia." )
const experto = new Planes("Experto", 10.99, "Psicolog@ con más de 10 años de experiencia y maestría psicología clínica. O especialización en psicología clínica y más de 15 años de experiencia.")

plan.push(profesional, especialista, experto);




