const bienvenida = ( (req,resp)=>{
    resp.send( 'Bienvenutti');
});

const nomina = ( (req,resp)=>{
    resp.send( 'La nomina de todos los administrativos');
});

const borrar = ( (req,resp)=>{
    resp.setHeader('Content-Type','text/html');
    resp.send( ' Los datos han sido borrado')
});

const insertar = ( (req,resp)=>{

    resp.end( ' los datos han sido recibidos');
    //console.log(req);
    console.log(req.body);
   });

const actualizar = ( (req,resp)=>{

    resp.send( 'Los datos han sido modificados')
});
const administrativos = (( (req,resp)=>{

    resp.json(
     {
         "name": "Hector",
         "apellido":"Cometo",
         "dni": "7152658",
         "cuota":"true",
         "aguinaldo":"",
         "expediente":"23"

     }
    )
     
      resp.send('administrativos')
  }));
//----exportar--modulos--------------------------
module.exports ={
    bienvenida,
    nomina,
    borrar,
    insertar,
    actualizar,
    administrativos
};
