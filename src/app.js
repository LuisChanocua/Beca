//dando de alta el server
const express = require('express');
//se inicializa express
const app = express();

//para las rutas
const path = require('path');
//añadimos morgan para las peticiones
const morgan = require('morgan');
const mysql = require('mysql');
//se añande la conexion
const myconexion = require('express-myconnection');


//configurando el motor de plantillas
app.set('view engine', 'ejs');

//uniendo las rutas
app.set('views', path.join(__dirname, 'views'));

//morgan nos da el tipo de peticiones que se estan solicitando
app.use(morgan('dev'));

//se importan las rutas
const customerR= require('./routes/customer')



















//se incluyen los datos de la conexion de la base de datos
app.use(myconexion(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'chanocua24',
    port: '3306',
    database: 'db_beca'
}, 'single'));

//se configura el archivo para las rutas
app.use('/', customerR);


//se configura el puerto
app.set('port', process.env.PORT || 3001);

//iniciar el server
app.listen(app.get('port'), () => {
    console.log("Server started");
});


