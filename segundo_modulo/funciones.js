const fs = require('fs');
listaEstudiantes =[];

const crear = (estudiante)=>{
    listar();
    let est ={
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles : estudiante.ingles,
        programacion: estudiante.programacion
    }
    let duplicado = listaEstudiantes.find(nom =>nom.nombre == estudiante.nombre);
    if(!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }else{
        console.log("Ya existe otro estudiante con ese nombre")
    }

}

const listar = () =>{
    try{
        listaEstudiantes = require('./listado.json');
    }catch(error){
        listaEstudiantes = [];
    }
    
}

const guardar = ()=>{
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err)=>{
        if(err) throw(err);
        console.log('Archivo creado con exito');
    });
}

mostrar = () =>{
    listar();
    console.log('Notas estudiante');
    console.log('-----------------');
    listaEstudiantes.forEach(estudiante=>{
        console.log(estudiante.nombre);
        console.log('Notas');
        console.log('Matematicas '+ estudiante.matematicas);
        console.log('Ingles: '+estudiante.ingles);
        console.log('Programación: '+ estudiante.programacion);
        console.log('----------------');
    })
}

mostrarmat = () =>{
    listar();
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if(ganan.length ==0){
        console.log('Ningun estudiante ha gando');
    }else{  
        ganan.forEach(estudiante=>{
            console.log(estudiante.nombre);
            console.log('Notas');
            console.log('Matematicas '+ estudiante.matematicas);
            console.log('Ingles: '+estudiante.ingles);
            console.log('Programación: '+ estudiante.programacion);
            console.log('----------------');
        })

    }
}

const mostrarest = (nom) =>{
    listar()
    let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nom);

    if(encontrado){
        console.log(encontrado.nombre);
        console.log('==========NOTAS===========');
        console.log('matematicas: '+ encontrado.matematicas);
        console.log('ingles: '+ encontrado.ingles);
        console.log('programacion: '+ encontrado.programacion);
    }else{
        console.log('No existe el estudiante');
    }
    
}
const actualizar = (nom, asignatura, calificacion) =>{
    listar();
    let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nom);

    if(!encontrado){
        console.log('Estudiante no existe');

    }else{
        encontrado[asignatura] = calificacion;
        guardar();
    }
}
const eliminar =(nom) =>{
    listar()
    let nuevo = listaEstudiantes.filter(estudiante => estudiante.nombre  != nom)
    if(nuevo.length ==listaEstudiantes.length){
        console.log('Ningun estudiante tiene el nombre');
    }else{  
        listaEstudiantes = nuevo
        guardar()

    }

}
module.exports = {
    crear,
    mostrar,
    mostrarmat,
    mostrarest,
    actualizar,
    eliminar
}