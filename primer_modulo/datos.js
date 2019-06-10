//const estudiante1 = require('./calculos');
const {estudiante, obtenerPromedio} = require('./calculos');

const fs = require('fs');


let {nombre, edad : anos, notas:{matematicas,ingles, programacion}} = estudiante;
console.log('El promedio del estudiante es '+ 
    obtenerPromedio(
            matematicas,
            ingles,
            programacion
            )
    );

console.log("El nombre del estudiante es: "+ nombre+ " "+ anos);

let crearArchivo = (estudiante) => {
    texto = 'El nombre del estudiante es '+ nombre+ '\n'+
    "ha obtenido un promedio de "+ obtenerPromedio(matematicas,ingles, programacion);
    ;
    fs.writeFile('promedio.txt',texto,(err)=>{
        if(err) throw(err);
        console.log('se ha creado el archivo');
    });

}

crearArchivo(estudiante);