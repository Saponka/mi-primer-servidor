

//-----get----------------
const bienvenida = ( (req,res)=>{
    console.log(req);
    res.send( 'Bienvenutti');
});
//----get----------------
const nomina = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'La Nomina de todos los Padres.',
        body
    });
    //res.send( 'La nomina de todos los padres');
});
//----delete-------------
const borrar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'<h2 style="color: blue;"> Los datos han sido borrado</h2>.',
        body
    });
    resp.setHeader('Content-Type','text/html');
    //res.send( '<h2> Los datos han sido borrado</h2>')
});
//--post----------
const insertar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'<h2 > Los datos han sido Recibidos</h2>.',
        body
    });
   // res.end( ' los datos han sido recibidos');
    //console.log(req);
    console.log(req.body);
   });
//------put-------------
const actualizar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'<h2 > Los datos han sido Actualizados</h2>.',
        body
    });
    //res.send( 'Los datos han sido modificados')
});
//-----------------------
const padres = (( (req,res)=>{
    const body = req.body;
    res.json(
     {
         "name": "Jorge",
         "apellido":"Aristimuño",
         "dni": "15259874",
         "direccion":"Estarda 1489",
         "telefono":"358741258",
         "trabajo":"Panadero",
         "alumno":"Pablo Aristimuño",
         "año":"4",
         "curso":"B",
     }
    )
     
      res.send('padres')
  }));

//----exportar--modulos--------------------------
 module.exports = {
     bienvenida,
     nomina,
     borrar,
     insertar,
     actualizar,
     padres
 };

