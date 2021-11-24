
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
//  callback ()=>{} donde la respuesta(resp) sea: resp.statusCode = 200;  
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
    console.log(`Servidor corriendo en http://${hostname}/puerto:${port}`);
}) */

 

 // Servidor creado con express

// 1.crear variable const con la palabra "express",con la keyword (require) donde traigo todo el codigo "express" de node js
 
  const express = require('express');

 const app = express();

 const port = 3000;


app.get('/home',((req, resp) =>{
    resp.send('Bienvenido a nuestra Aplicacion')
}));


 app.listen(port,() =>{
     console.log(`Servidor corriendo en el puerto:${port}`);
 });


 app.on('error',(err)=>{

     console.log(`Error en la ejecuccion del servidor ${error}`);
 }); 