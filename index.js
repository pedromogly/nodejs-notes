const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//Conexão com o db
const sequelize = new Sequelize('sistemacadastro', 'root', 'ph97233313', {
    host: "localhost", 
    dialect: 'mysql' 
})

//Config Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Config
    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars')


    app.get('/cad', (req,res)=>{
        res.render('form')
    })

    app.post('/add', (req,res)=>{
        req.body.conteudo
        res.send('form recebido:'+req.body.titulo)
    })

app.listen(7171,()=>{
    console.log('ON')
})