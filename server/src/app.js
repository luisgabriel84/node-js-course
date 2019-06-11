const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

require('./helpers');

const directoriopublico = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname,'../partials');

app.use(express.static(directoriopublico));
hbs.registerPartials(directorioPartials);


app.set('view engine','hbs');

app.get('/',(req, res)=>{
    res.render('index',{
        estudiante:"Sebastian"
    });
});

app.get('/calculos',(req, res)=>{

    console.log(req.query);
    res.render('calculos',{
        estudiante:req.query.nombre,
        nota1: parseInt(req.query.nota1),
        nota2: parseInt(req.query.nota2),
        nota3: parseInt(req.query.nota3)
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando puerto 3000');
})