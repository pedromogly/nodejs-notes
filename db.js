
//conexão para o banco de dados via sequelize
const Sequelize = require('sequelize') //importa modulo sequelize
//configura o banco numa nova instancia sequelize
//em ondem: 'nomedobanco', 'login', 'senha'
const sequelize = new Sequelize('sistemacadastro', 'root', 'ph97233313', {
    host: "localhost", //em qual maquina o banco está
    dialect: 'mysql' //qual o dialeto desse banco, no caso é MySQL
})

//criar uma nova tabela chamada 'postagens'
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING //string tem limite de tamanho
    },
    conteudo: {
        type: Sequelize.TEXT //text não tem limite de tamanho
    }
})


const Users = sequelize.define('users', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})