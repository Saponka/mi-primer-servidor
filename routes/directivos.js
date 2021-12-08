
const {Router} = require('express');
const router = Router ();

const {
    bienvenida,
    nomina,
    insertar,
    borrar,
    actualizar,
    directivos,
} = require ('../controllers/directivos');

//-----------------------------------
router.get ( '/bienvenida',bienvenida);
router.get ('/nomina', nomina );
router.post ('/insertar', insertar);
router.delete ('/borrar', borrar);
router.put ('/actualizar',actualizar);
router.get ('directivos', directivos);

//-------exportar--modulos---------------------
module.exports =  router;