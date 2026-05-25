const express = require("express");

const app = express();

const puerto = 5000;

app.get("/", (req, res) => {
    res.send("Hola! Mi servidor Node.js con Express funciona correctamente.");

});
app.get("/sobre-mi", (req, res) => {
    res.send("Soy estudiante aprendiendo Node.js y Express .");

});
app.listen(puerto, "0.0.0.0", () => {
    console.log(`Servidor ejecutandose en http://0.0.0.0:${puerto}`);

});
