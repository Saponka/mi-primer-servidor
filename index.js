
//Servidor creado con modulo nativo HTTP de node js
/* 
// 1.crear variable const con la palabra "http"(por default),con la keyword (require) donde traigo todo el codigo "http" de node js

const http = require("http");

//2.variable const con la palabra "hostname" y el local host de la pc con comillas simples'127.0.0.1' 

const  hostname = '127.0.0.1';

//3.crear const con la palabra "port"(puerto) y el numero de port (8080,3000,3306 puertos de prueba)

const port = 8080;

//4.creamos variable const con la palabra "server" y usamos el metodo "http.createServer ()" con 1 callback con 2 parametros:
// 1 parametro del cb: req (peticion).
// 2 parametro del cb: resp(respuesta).
//  callback ()=>{} donde la respuesta(resp) sea: 
//  resp.statusCode = 200;  //codigos de estado 200: ok
// resp.setHeader('Content-Type','text/plain') //Content-Type:tipo de contenido y text/plain: texto plano.
// resp.end('Texto a mostrar')


const server = http.createServer((req,resp)=>{
    resp.statusCode = 200;
    resp.setHeader ('Content-Type','text/plain');
    resp.end('Buenas tardes estoy creando mi primer servidor');
});

// creamos un "server.listen ()" con 2 parametros:
// 1 parametro: la variable port (que contiene el numero de puerto).
// 2 parametro: la variable hostname (que contiene el numero de localhost)
//1 callback ()=>{}: con un "console.log()" (en templates literals(``)) + el port: ${port} 

server.listen(port,hostname,()=>{
    console.log(`Servidor corriendo en http: //${hostname}/puerto:${port}`);
}) */

 

 // Servidor creado con express

// 1.crear variable const con la palabra "express",con la keyword (require) donde traigo todo el codigo "express" de node js
 
/*   const express = require('express');

 const app = express();

 const port = 8080;


app.get('/',((req, resp) =>{
    resp.send('Bienvenido al servidor Express')
}));


 app.listen(port,() =>{
     console.log(`Servidor corriendo en el puerto:${port}`);
 });


 app.on('error',(err)=>{

     console.log(`Error en la ejecuccion del servidor ${error}`);
 }); 
 */


 
//--------Servidor----------------------
 const http = require("http");

//---coneccion a Db---------trae la conexion de la ruta ./carpeta/archivo
const { connection} = require('./DB/config');

 const express = require('express');

 const app = express();

 const port = 8080;

 //------------------------------------------

app.get ('/',( (req,resp)=>{

resp.setHeader('Content-Type','text/html');
resp.end('<h1 style="color: blue;text-align: center;font-size: 40px;font-family:cursive;" >Bienvenidos al Servidor Express</h1>')
 }));

 //---------------- ESCRIBIR VISITAS------------------------------
 const fs = require('fs');

  let n_visitas = "";
  

 app.get ('/visitas',( (req,resp)=>{

    try {
        fs.writeFileSync("visitas.txt", "El numero de visitas es: " + n_visitas  );
        
    } catch (error) {
    
         console.log("El error es " + error);
    }
     resp.setHeader('Content-Type','text/html');
     resp.end(' <h2 style="color: blue;text-align: center;font-size: 40px;font-family:cursive;"> La cantidad de visitas es ' + n_visitas++ + '</h2>');
     //resp.send(n_visitas);
}));

 //-----------------------------LEER VISITAS-------------------------------------------
 
 try {
    visitas = fs.readFileSync("/visitas.txt", "utf-8");
    console.log(visitas);

} catch (error) {
    
    console.log(error);
};
  

//------------------------fecha y hora-------------------------------------------------------

 const date = new Date ();

app.get ('/fyh',( (req,resp)=>{

    resp.setHeader('Content-Type','text/html');
    resp.end( '<h2 style="color:red;text-align: center;font-size: 20px;font-family:cursive;"> La Fecha es ' + date + '</h2>'                                           )
}));

//-----------------------------------------------------------------------------
 app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto:${port}`);
});

app.on('error',(err)=>{
    console.log(`Error en la ejecuccion del servidor ${error}`);
});  

//-------------------------------------------------------------------------------

//-----------------MIDDLEWARE------------------

app.use(express.json());

//-----------------conexion a la base de datos: select * from alumnos-----------------------------

app.get ('/alumnos',( (req,resp)=>{

   resp.json(
    {
        "name": "Pablo",
        "dni": "31152658"
    }
   )
     resp.setHeader('Content-Type','text/html');
     resp.send('Alumnos')
 })); 

 //---------------------------------post------enviar------------------------
// post: envia datos de mi frontend a mi backend
 //conexion a la base de datos: insert into alumnos

app.post ('/alumnos',( (req,resp)=>{
     //resp.setHeader('Content-Type','text/html');
     resp.end( ' los datos han sido recibidos');
     //console.log(req);
     console.log(req.body);
 }));

 //---------------------------------delete------------------------------

 app.delete ('/alumnos',( (req,resp)=>{
    resp.setHeader('Content-Type','text/html');
    resp.send( '<h2 "> Los datos han sido borrado</h2>')
}));

//---------------------------Put--update-------------------------------

app.put ('/alumnos',( (req,resp)=>{

    resp.setHeader('Content-Type','text/html');
    resp.send( '<h2 "> Los datos han sido modificados</h2>')
}));





