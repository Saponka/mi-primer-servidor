
const {Router} = require('express');
const router = Router ();

const {
    bienvenida,
    nomina,
    insertar,
    borrar,
    actualizar,
   padres,
} = require ('../controllers/padres');

//-----------------------------------
router.get ( '/bienvenida',bienvenida);
router.get ('/nomina', nomina );
router.post ('/insertar', insertar);
router.delete ('/borrar', borrar);
router.put ('/actualizar',actualizar);
router.get ('/padres', padres);

//-------exportar--modulos---------------------
module.exports =  router;