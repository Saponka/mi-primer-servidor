

//-----------------------alumnos ----------------------------------
//------------------------routes-----------------------------------

const {Router} = require('express');
const router = Router ();

 const {
     bienvenida,
     nomina,
     insertar,
     borrar,
     actualizar,
     alumnos,
 } = require ('../controllers/alumnos'); //traemos los modulos que exportamos de controllers(se puede escribir con el .js al final)

//-----------------------------------
router.get ('/alumnos', alumnos);
router.get ( '/bienvenida',bienvenida);
router.get ('/nomina', nomina );
router.post ('/insertar', insertar);
router.put ('/actualizar',actualizar);
router.delete ('/borrar', borrar);


//----exportar---modulos--------
module.exports =  router;