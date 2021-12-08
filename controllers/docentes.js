const bienvenida = ( (req,resp)=>{
    resp.send( 'Bienvenutti');
});



const borrar = ( (req,resp)=>{

    resp.send( 'Los datos han sido borrado')
});

const insertar = ( (req,resp)=>{
 
    resp.end( ' los datos han sido recibidos');
    //console.log(req);
    console.log(req.body);
   });

const actualizar = ( (req,resp)=>{
    resp.send( 'Los datos han sido modificados')
});
const docentes = (( (req,resp)=>{
    resp.json(
     {
        "name": "fabiana",
         "apellido":"Arias",
         "dni": "20152589",
         "telefono":"3584785241",
         "puesto":"profesora Matematicas",
         "cuota":"true",
         "direccion":"Maipu 2635",
     },
     
    );
  
      resp.send('docentes')
  }));
//----exportar--modulos--------------------------
module.exports ={
    bienvenida,
    borrar,
    insertar,
    actualizar,
     docentes
};



/*  
app.get ('/alumnos',( (req,resp)=>{

   resp.json(
    {
        "name": "Pablo",
        "dni": "31152658"
    }
   )
     //resp.setHeader('Content-Type','text/html');
     resp.send('alumnos')
 })); 
 
 //-----------------------------------------

 app.post ('/alumnos',( (req,resp)=>{
     //resp.setHeader('Content-Type','text/html');
     resp.end( ' los datos han sido recibidos');
     console.log(req);
     console.log(req.body);
    }));
      */
//---------------------------------delete------------------------------
/* 
app.delete ('/alumnos',( (req,resp)=>{
    resp.setHeader('Content-Type','text/html');
    resp.send( '<h2 "> Los datos han sido borrado</h2>')
}));
 */
//---------------------------Put--update-------------------------------

/* app.put ('/alumnos',( (req,resp)=>{

    resp.setHeader('Content-Type','text/html');
    resp.send( '<h2 "> Los datos han sido modificados</h2>')
}));

 */
/* app.all('/',(req.resp,next)=>{
    console.log('Lapeticion paso primero por aqui')
    next();
}); */
