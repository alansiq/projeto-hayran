// Importando Express e Executando-o
const express = require("express");
const app = express();

// Primeiro a rota que vc quer controlar / escutar
// Segundo é a função que ele vai executar quando alguém acessar essa rota
        // REQUEST, RESPONSE
app.get("/HAYRAN", function(request, response) {
    response.send("Hello world!")
});

// Ouvindo uma porta do nosso computador / da nossa internet
    // primeiro parametro: porta que nossa aplicação vai ser executada
    // segundo parametro: Uma função que vai ser executada caso dê tudo certo
app.listen(3000, falarQueDeuTudoCerto);

// Function que fala que deu tudo certo
function falarQueDeuTudoCerto() {
    console.log("Deu tudo certo!")
}