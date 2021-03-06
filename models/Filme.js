const db = require('./db');

const Filme = db.sequelize.define('filmes',{
    nomeFilme:{
        type: db.Sequelize.STRING
    }, descricaoFilme:{
        type: db.Sequelize.STRING
    }, tipoFilme:{
        type: db.Sequelize.STRING
    }, categoriaFilme:{
        type: db.Sequelize.STRING
    }, anoFilme:{
        type: db.Sequelize.INTEGER
    }, produtoraFilme:{
        type: db.Sequelize.STRING
    }, diretorFilme:{
        type: db.Sequelize.STRING
    }, atoresFilme:{
        type: db.Sequelize.STRING
    }, linkImg:{
        type: db.Sequelize.STRING
    }, createdAt:{
        type: db.Sequelize.DATE
    }, updatedAt:{
        type: db.Sequelize.DATE
    }, createdAt:{
        type: db.Sequelize.DATE
    }, avaliacao:{
        type: db.Sequelize.FLOAT
    }, ID:{
        type: db.Sequelize.INTEGER
    }, numaval:{
        type: db.Sequelize.INTEGER
    }
})

//Filme.sync({force: true}) //para criar a tabela (MANTER DESATIVADO PQ JA TA CRIADO)
module.exports = Filme;