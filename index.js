const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./database/database");
const Pergunta = require("./database/Pergunta");


//banco de dados

sequelize
    .authenticate()
    .then(() =>
        console.log('Connection has been established successfully.'
        ))
    .catch((error) =>
        console.error('Unable to connect to the database:', error)
    )


app.set('view engine', 'ejs'); //habilita ejs
app.use(express.static('public')); // habilita arquivos estáticos
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC']
    ]}).then((perguntas) => {
        res.render('index', { 
            title: "Pagina de Perguntas e Respostas", 
            perguntas,
     });

    })
})

app.get("/perguntar", function (req, res) {
    res.render('perguntar', { title: "Pergunte" });
})

app.post("/salvarpergunta", function (req, res) {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    
    Pergunta.create({
        titulo, 
        descricao
    }).then(()=>{
        res.redirect("/");
    })

});

app.listen(8080, () => { console.log("Está rodando!"); })
