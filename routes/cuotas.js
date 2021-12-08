const {Router} = require('express');
const router = Router ();


 const {
    bienvenida,
    nomina,
    insertar,
    borrar,
    actualizar,
    cuotas,
} = require ('../controllers/cuotas');

//-----------------------------------
router.get ( '/bienvenida',bienvenida);
router.get ('/nomina', nomina );
router.post ('/insertar', insertar);
router.delete ('/borrar', borrar);
router.put ('/actualizar',actualizar);
router.get ('/cuotas', cuotas);

//-------exportar--modulos---------------------
module.exports =  router;