//-----------------------administrativos ----------------------------------
//------------------routes---------------

const { Router } = require('express');
const router = Router ();

 const {
     bienvenida,
     nomina,
     insertar,
     borrar,
     actualizar,
     administrativos,
 } = require ('../controllers/administrativos');

//-----------------------------------
router.get ( '/bienvenida',bienvenida);
router.get ('/nomina', nomina );
router.post ('/insertar', insertar);
router.delete ('/borrar', borrar);
router.put ('/actualizar',actualizar);
router.get ('/administrativos', administrativos);

//-------exportar--modulos---------------------
module.exports =  router;