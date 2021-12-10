
//-----get----------------
const bienvenida = ( (req,res)=>{
    console.log(req);
    res.send( 'Bienvenutti');
});
//----get----------------
const nomina = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'La nomina de todos los directivos.',
        body
    });
    //res.send( 'La nomina de todos los directivos');
});
//----delete-------------
const borrar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'los datos han sido Borrados.',
        body
    });
    //res.send( '<h2> Los datos han sido borrado</h2>')
});
//--post----------
const insertar = ( (req,res)=>{
    const body = req.body;
    res.end( ' los datos han sido recibidos');
    //console.log(req);
    console.log(req.body);
   });
//------put-------------
const actualizar = ( (req,res)=>{
    const body = req.body;
    res.status(200).json({
        status:'Los datos han sido Actualizados.',
        body
    });
    //res.send( 'Los datos han sido modificados')
});
//-----------------------
const directivos = (( (req,res)=>{
    const body = req.body;
    res.json(
     {
        "name": "Elvira",
        "apellido":"Cuenya",
        "dni": "7582458",
        "puesto":"director/a",
        "cuota":"true",
        "direccion":"pje dante 254"
     }
    )
     
      res.send('directivos')
  }));

//----exportar--modulos--------------------------
 module.exports = {
     bienvenida,
     nomina,
     borrar,
     insertar,
     actualizar,
     directivos
 };

