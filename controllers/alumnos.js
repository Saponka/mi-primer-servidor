
//-----get---------------- creamos variable = a la funtion get,post,put,etc ((req,res)=>{})

const bienvenida = ( (req,res)=>{
    console.log(req);
    res.send( 'Bienvenutti');
});

//----get----------------
const nomina = ( (req,res)=>{

   res.status(200).json({
       status:'La Nomina de todos los Alumnos.',
       body
   });
    //res.send( 'La nomina de todos los alumnos');
});
//----delete-------------
const borrar = ( (req,res)=>{

    const body = req.body;
    res.status(200).json({
        status:'Los Datos han sido borrado.',
        body
    });
    //res.send( '<h2> Los datos han sido borrado</h2>')
});

//--post----------
const insertar = ( (req,res)=>{

    const body = req.body;
      res.status(200).json({
        status:'Los Datos han sido Recibidos.',
        body
    });
    //res.end( ' los datos han sido recibidos');
    //console.log(req);
    console.log(req.body);
   });

//------put-------------
const actualizar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'Los Datos han sido Recibidos.',
        body
    });  
    //res.send( 'Los Datos han sido Actualizados')
});

//-----------------------
const alumnos = (( (req,res)=>{

    res.json(
     {
        "name": "Pablo",
         "apellido":"Aristimuño",
         "dni": "31152658",
         "cuota":"true",
     }
    )
     
      res.send('alumnos')
  }));

//----exportar--modulos---- las variables con  la funcion---exportamos a routes-------------------
 module.exports = {
     bienvenida,
     nomina,
     borrar,
     insertar,
     actualizar,
     alumnos
 };






//---------------------------------------------------------
/*  
app.get ('/alumnos',( (req,res)=>{

   res.json(
    {
        "name": "Pablo",
        "dni": "31152658"
    }
   )
     //res.setHeader('Content-Type','text/html');
     res.send('alumnos')
 })); 
 
 //-----------------------------------------

 app.post ('/alumnos',( (req,resp)=>{
     //res.setHeader('Content-Type','text/html');
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

// midleware
/* app.all('/',(req.resp,next)=>{
    console.log('Lapeticion paso primero por aqui')
    next();
}); */

