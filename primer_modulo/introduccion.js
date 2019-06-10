function promedio1(nota_uno, nota_dos, nota_tres){
    let resultado = (nota_uno+nota_dos+nota_tres)/3;
    console.log("Promedio 1 "+resultado);
}

let promedio2 = (nota_uno, nota_dos, nota_tres)=>{

    setTimeout(function(){
        let resultado = (nota_uno+nota_dos+nota_tres)/3;
        //console.log("Promedio 2 "+ resultado);

        return resultado;
    },2000);
}

let promedio3= (nota_uno, nota_dos, nota_tres) => console.log( "Promedio 3 "+ (nota_uno+nota_dos+nota_tres)/3);

let promedio4 = (nota_uno, nota_dos, nota_tres,callback)=>{

    setTimeout(function(){
        let resultado = (nota_uno+nota_dos+nota_tres)/3;
        //console.log("Promedio 2 "+ resultado);
        callback(resultado);
    },0);
}


//promedio1(2,3,4);
//promedio2(1,2,1);
//promedio3(5,4,5);

//funcion flecha


promedio4(5,4,7,function(resultado){
    console.log(resultado);
});
