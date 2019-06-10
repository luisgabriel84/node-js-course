const nombre ={
    demand: true,
    alias: 'n'
}

const matematicas ={
    demand: true,
    alias: 'm'
}

const ingles ={
    demand: true,
    alias: 'i'
}

const programacion ={
    demand: true,
    alias: 'p'
}
const creacion ={
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraest ={
    nombre
}

const elimina ={
    nombre
}

const actualiza = {
    nombre,
    asignatura :{
        demand: true,
        alias: 'a'
    },
    calificacion:{
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
            .command('crear','Crear un estudiante',creacion)
            .command('mostrar','Muestrar los estudiantes')
            .command('mostrarest','Muestra la información de un estudiante',muestraest)
            .command('actualizar','Actualiza la informacion de un curso', actualiza)
            .command('eliminar','ELimina de la base de datos', elimina)
            .argv;

module.exports ={
    argv
}