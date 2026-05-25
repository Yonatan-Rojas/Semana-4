const express = require("express");

const app = express();

const puerto = 3000;

app.get("/", (req, res) => {
    res.send("Hola! Mi servidor Node.js con Express funciona correctamente.");

});
app.get("/sobre-mi", (req, res) => {
    res.send("Soy estudiante aprendiendo Node.js y Express .");

});
app.listen(puerto, () => {
    console.log ('Servidor ejecutandose en http://localhost:${puerto}');

});
