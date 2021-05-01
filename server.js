const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');
const Film = require('./models/Filme');
require('./models/Filme');
const path = require('path');
const src = require('./views/js/script')


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static('views'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    Film.findAll().then((filmes)=>{
        res.render("index", {filmes:filmes});//encaminhando dados para o front 25
    }).catch((err)=>{
        console.log("Erro ao buscar valores no Banco: "+err);
    })
    
})

app.post('/cadastrar', (req, res)=>{
    if(req.body.linkImg.length >500){ //desc vai até 800
        res.send("Link da imagem deve ter no meximo 500 caracteres!");
    }else if (req.body.aval >0 && req.body.aval <6){
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
    }else{
        res.send("valor de nota invalido!");
    }
});

app.get('/pesquisar', (req, res)=>{
    Film.findAll({nomeFilme: req.body.info}).then((filmes)=>{
        console.log(filmes)
        res.render("index", {filmes:filmes});//encaminhando dados para o front 25
    }).catch((err)=>{
        console.log("Erro ao buscar valores no Banco: "+err);
    })
})

app.post('/avaliar', (req, res)=>{
    //  console.log(req.body.idd);
    //  res.send("AAA: "+req.body.idd);

    //  var result; 

    //  if(document.getElementById('star-5').checked){
    //      result = 5/(req.body.numaval+1);
    //  } else if(document.getElementById('star-4').checked){
    //      result = 4/(req.body.numaval+1);
    //  } else if(document.getElementById('star-3').checked){
    //      result = 3/(req.body.numaval+1);
    //  } else if(document.getElementById('star-2').checked){
    //      result = 2/(req.body.numaval+1);
    //  }else if(document.getElementById('star-1').checked){
    //      result = 1/(req.body.numaval+1);
    //  }


     Film.findOne({_id: req.body.id}).then((film)=>{
        film.numaval = req.body.numaval+1
        film.avaliacao = result 
        film.save().then(()=>{
            console.log("Avaliado com sucesso")
            res.redirect("/");
        }).catch((err)=>{
            res.send("Erro ao guardar no Banco: "+err);
        })
     }).catch((err)=>{
         res.send("Erro ao cadastrar avaliação: "+err);
     })
})

var server = app.listen(3003, ()=>{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Servidor rodando em http://%s:%s", host, port);
})