

//-----------------------docentes ----------------------------------
//------------------routes---------------

const { Router } = require('express');
const router = Router ();

 const {
     bienvenida,
     
     insertar,
     borrar,
     actualizar,
     docentes,
 } = require ('../controllers/docentes');

//-----------------------------------
router.get ( '/bienvenida',bienvenida);

router.post ('/insertar', insertar);
router.delete ('/borrar', borrar);
router.put ('/actualizar',actualizar);
router.get ('/docentes', docentes);

//-------exportar--modulos---------------------
module.exports =  router;