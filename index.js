
//--------Servidor---http-------------------
//const http = require("http");
//---coneccion a Db---------trae la conexion de la ruta ./carpeta/archivo
//const { connection } = require('./DB/config');
//----------------------------------------------------------------------
/* const express = require('express');
const router = express.Router(); */
//------------------------------------------------------------------
 const express = require('express');
 const app = express();
 const port = 3000;
 const { connection } = require('./DB/config') // conection traer config.js
//-----------------MIDDLEWARE------------------
app.use(express.json());
app.use(express.static('public'));

//-----------MIDDLEWARE--/api/--------------------

app.use('/api/alumnos',require('./routes/alumnos'));
app.use('/api/docentes', require('./routes/docentes'));
app.use('/api/administrativos', require('./routes/administrativos'));
app.use('/api/directivos', require('./routes/directivos'));
app.use('/api/cuotas', require('./routes/cuotas'));
app.use('/api/calificaciones', require('./routes/calificaciones'));
app.use('/api/padres', require('./routes/padres')); 
 
//--------------------Config del puerto------------------------------------------------------
 app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto:${port}`);
});
app.on('error',(err)=>{
    console.log(`Error en la ejecuccion del servidor ${error}`);
}); 




