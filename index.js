const express = require("express");

const app = express();





// Criando Rotas
    // Req - Res -> Resposta = enviar uma mensagem;

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app!");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
})








app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost8081");
});