const base = require("mysql2");

const db = base.createConnection({
    host: 'blo76syozly3xcpvwvwp-mysql.services.clever-cloud.com',    // Host de tu servidor MySQL
    user: 'uy5oosoaf2feubjt',         // Usuario de MySQL
    password: 'FMQ21orrQ6qUhXbe9MKd', // Contraseña de MySQL
    database: 'blo76syozly3xcpvwvwp',     // Nombre de la base de datos que deseas utilizar
    port: 3306 
  });
  
  // Conecta a la base de datos
  db.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
      throw err;
    }
    console.log('Conexión a la base de datos MySQL establecida');
  });


  module.exports = db