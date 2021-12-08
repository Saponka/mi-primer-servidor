
const {Router} = require('express');
const router = Router ();

const {
    bienvenida,
    nomina,
    insertar,
    borrar,
    actualizar,
    calificaciones,
} = require ('../controllers/calificaciones');

//-----------------------------------
router.get ('/calificaciones', calificaciones);
router.get ( '/bienvenida',bienvenida);
router.get ('/nomina', nomina );
router.post ('/api/insertar', insertar);
router.put ('/actualizar',actualizar);
router.delete ('/borrar', borrar);


//----exportar---modulos--------
module.exports =  router;