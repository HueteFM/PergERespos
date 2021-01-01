const express = require('express');
const app = express();

app.set('view engine', 'ejs'); //habilita ejs
app.use(express.static('public')); // habilita arquivos estáticos

app.get("/", function (req, res) {
    res.render('index');
})

app.listen(8080, () => { console.log("Está rodando!"); })
