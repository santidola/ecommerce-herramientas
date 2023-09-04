const express = require("express");
const app = express();
const db = require("./db/conexion_bd")

app.get("/", (req, res)=>{
    res.send("Hola Mundo")
})

app.get("/santiago", (req, res)=>{
    res.send("Santiago")
})

app.listen(5000, ()=>{
    console.log(`servidor en el puerto 5000`);
    db
})