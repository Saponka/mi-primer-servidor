
//-----get----------------
const bienvenida = ( (req,res)=>{
    console.log(req);
    res.send( 'Bienvenutti');
});
//----get----------------
const nomina = ( (req,res)=>{
    res.send( 'La nomina de todos los directivos');
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
const directivos = (( (req,res)=>{

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

