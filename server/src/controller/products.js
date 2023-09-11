const productos = {} 
const db = require("../db/conexion_bd.js");

productos.mostrar_productos = (req, res)=>{
    db.query("SELECT * FROM productos", (err, result)=>{
        if(err) throw err;
        res.json(result);
    })
}

productos.agregar_productos = (req, res)=>{
    const { nombre, descripcion, precio, stock, categoria, imagen_url } = req.body;
    const sql = 'INSERT INTO productos (nombre, descripcion, precio, stock, categoria, imagen_url) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [nombre, descripcion, precio, stock, categoria, imagen_url];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar el producto: ' + err.message);
      res.status(500).json({ error: 'Error al insertar el producto' });
    } else {
      console.log('Producto insertado con éxito');
      res.status(200).json({ message: 'Producto insertado con éxito' });
    }
  });



}



module.exports = productos;

