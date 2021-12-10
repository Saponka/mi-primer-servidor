

//-----get----------------
const bienvenida = ( (req,res)=>{
    console.log(req);
    res.send( 'Bienvenutti');
});
//----get----------------
const nomina = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'La nomina de todas las calificaciones de los alumnos.',
        body
    });
    //res.send( 'La nomina de todas las calificaciones de los alumnos');
});
//----delete-------------
const borrar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'los datos han sido Borrados.',
        body
    });
   // res.send( '<h2> Los datos han sido borrado</h2>')
});
//--post----------
const insertar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'los datos han sido Recibidos.',
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
        status:'los datos han sido Actualizados.',
        body
    });
    //res.send( 'Los datos han sido modificados')
});
//-----------------------
const calificaciones = (( (req,res)=>{
    const body = req.body;
    res.json(
     {
         "name": "Pablo",
         "apellido":"Manchado",
         "dni": "31152658",
         "matematicas":"8",
         "fisica":"7",
         "filosofia":"8",
         "programacion":"10"
     }
    )
     
      res.send('calificaciones')
  }));

//----exportar--modulos--------------------------
 module.exports = {
     bienvenida,
     nomina,
     borrar,
     insertar,
     actualizar,
     calificaciones
 };

