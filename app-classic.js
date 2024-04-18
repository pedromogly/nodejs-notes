//servidor http de forma classica do node

//armazene numa variavel a requisição do modulo http do node
const server = require('http')

//chame o metodo do modulo http createServer
server.createServer( //como parametro vc cria uma função
    function(req,res){ //essa função passa dois parametros req e res
        //
        res.end("Ativo"); //para testar a função, use o metodo .end e exiba uma frase na pagina
    }
).listen(7171) //todo create server tem que ter uma porta .listen(portqualquer)

console.log("SERV ON") //só pra validar o servidor no ar