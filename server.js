const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
const Film = require('./models/Filme');
require('./models/Filme');
const path = require('path');


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static('views'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res)=>{
    Film.findAll().then((filmes)=>{
        res.render("index", {filmes:filmes});//encaminhando dados para o front 25
    }).catch((err)=>{
        console.log("Erro ao buscar valores no Banco: "+err);
    })
    
})

app.post('/cadastrar', (req, res)=>{
    if(req.body.linkImg.length >500){ //desc vai até 800
        res.send("Link da imagem deve ter no meximo 255 caracteres!");
    }else{
        Film.create({
            nomeFilme: req.body.nomeFilme,
            descricaoFilme: req.body.descricaoFilme,
            tipoFilme: req.body.tipoFilme,
            categoriaFilme: req.body.categoriaFilme,
            anoFilme: req.body.anoFilme,
            produtoraFilme: req.body.produtoraFilme,
            diretorFilme: req.body.diretorFilme, 
            atoresFilme: req.body.atoresFilme,
            linkImg: req.body.linkImg
        }).then(()=>{
            console.log("Cadastrado com sucesso!");
            res.redirect('/');
        }).catch((err)=>{
            res.send("Erro ao cadastrar: "+err);
        })
    }
});

app.get('/avaliar', (req, res)=>{
    console.log(req.body.id);
    res.send(req.body.id);
    // // Film.findOne()
})

var server = app.listen(3003, ()=>{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Servidor rodando em http://%s:%s", host, port);
})