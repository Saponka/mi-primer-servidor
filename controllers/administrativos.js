const bienvenida = ( (req,resp)=>{
    resp.send( 'Bienvenutti');
});

const nomina = ( (req,resp)=>{
    res.status(200).json({
        status:'La nomina de todos los administrativos.',
        body
    });
    //resp.send( 'La nomina de todos los administrativos');
});

const borrar = ( (req,resp)=>{

    const body = req.body;
    res.status(200).json({
        status:'Los datos han sido borrado.',
        body
    });
    //resp.send( ' Los datos han sido borrado')
});

const insertar = ( (req,resp)=>{

    const body = req.body;
    res.status(200).json({
        status:'los datos han sido recibidos.',
        body
    });
    //resp.end( ' los datos han sido recibidos');
    //console.log(req);
    console.log(req.body);
   });

const actualizar = ( (req,resp)=>{
    
    const body = req.body;
    res.status(200).json({
        status:'Los datos han sido modificados.',
        body
    });
    //resp.send( 'Los datos han sido modificados')
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
