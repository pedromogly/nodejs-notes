const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/html/index.html");
})

app.get('/sobre', (req,res)=>{
    res.send('sobre')
})

app.get('/membros', (req,res)=>{
    res.sendFile(__dirname+"/html/membros.html")
})

app.get('/ola/:nome/:cargo', (req,res)=>{
    res.send(req.params)
})

app.get('/membro/:nome', (req,res)=>{
    res.send("OLA "+req.params.nome)
})

//-----------------------------------
app.listen(7171, ()=>{
    console.log("SERVER ON")
})