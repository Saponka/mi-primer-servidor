//-------- conexion a base de datos-------------

const mysql = require ('mysql2');

//1- crear coneccion
const connection = mysql.createConnection({

host: 'localhost',
user: 'root',
password: '...',
database: 'pwi',

});

connection.connect(function (err) {

    if (err) {
    
        console.log("Error en intento de la conexion a la Data Base");
        console.log("El error esta en;"+ err.stack);
        return;
    }
    
    console.log("La conexion fue exitosa!!");
});

//--corta la conexion
//connection.end();

module.exports = connection;