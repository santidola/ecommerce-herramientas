const express = require("express");
const app = express();
const db = require("./db/conexion_bd")
const productos = require("./controller/products");

app.get("/productos", (req, res)=>{
    productos.mostrar_productos(req, res);
})

app.post("/productos", (req, res)=>{
    productos.agregar_productos(req, res);
})

app.listen(5000, ()=>{
    console.log(`servidor en el puerto 5000`);
    db
})