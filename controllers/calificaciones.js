

//-----get----------------
const bienvenida = ( (req,res)=>{
    console.log(req);
    res.send( 'Bienvenutti');
});
//----get----------------
const nomina = ( (req,res)=>{
    res.send( 'La nomina de todas las calificaciones de los alumnos');
});
//----delete-------------
const borrar = ( (req,res)=>{
    //resp.setHeader('Content-Type','text/html');
    res.send( '<h2> Los datos han sido borrado</h2>')
});
//--post----------
const insertar = ( (req,res)=>{
    res.end( ' los datos han sido recibidos');
    //console.log(req);
    console.log(req.body);
   });
//------put-------------
const actualizar = ( (req,res)=>{

    res.send( 'Los datos han sido modificados')
});
//-----------------------
const calificaciones = (( (req,res)=>{

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

