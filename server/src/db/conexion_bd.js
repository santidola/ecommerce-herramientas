const base = require("mysql2");

const db = base.createConnection({
    host: 'containers-us-west-54.railway.app',    // Host de tu servidor MySQL
    user: 'root',         // Usuario de MySQL
    password: 'K4gq05odtFyGU9NkSptO', // Contraseña de MySQL
    database: 'railway',     // Nombre de la base de datos que deseas utilizar
    port: 6737
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