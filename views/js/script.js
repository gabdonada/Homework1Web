
//carrega filmes do banco
/* window.onload = function(){
    var section1 = document.getElementById('section1');
    section1.innerHTML = '<b>Carrega filmes</b>';
};
 */

//objeto filme
function Filme (n, d, t, c, a, p, d, at){
    this.nome = n;
    this.descricao = d;
    this.tipo = t;
    this.categoria = c;
    this.ano = a;
    this.produtora = p;
    this.diretor = d;
    this.atores = at;
    this.avaliacao = 0;
    this.numeroAvaliacao = 0;
    this.mediaAvaliacao = 0;
}

//function cadastrar filme
function cadastrar(){
    var n = document.getElementById("nomeFilme").value;
    var d = document.getElementById("descricaoFilme").value;
    var t = document.getElementById("tipoFilme").value;
    var c = document.getElementById("categoriaFilme").value;
    var a = document.getElementById("anoFilme").value;
    var p = document.getElementById("produtoraFilme").value;
    var d = document.getElementById("diretorFilme").value;
    var at = document.getElementById("atoresFilme").value;
    var lin = document.getElementById("linkImg").value;
    f = new Filme(n, d, t, c, a, p, d, at, lin);
    document.getElementById("cadastroFilme").style.display = 'none';   
}

//aparecer cadastro de filme
function cadastrarFilme() {
    document.getElementById("cadastroFilme").style.display = 'block';
    console.log("Cadastro realizado com sucesso");
}

//fechar cadastro de filme
function fecharCadastro() {
    document.getElementById("cadastroFilme").style.display = 'none';
}



function pesquisa(){
    var metodos = document.getElementById("metodos");

    if(metodos.value=="palavra"){
        document.getElementById("info").style.visibility="visible";
    }else{
        document.getElementById("info").style.visibility="hidden";
    }
}