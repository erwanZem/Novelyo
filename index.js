var express = require('express');
var pg = require('pg');
var app = express();
const handlebars = require('express-handlebars');

var conString = "postgres://dhmjtbig:BeAtgw54uJZzenkFcxG0ZPMrXzrjN8tf@tai.db.elephantsql.com:5432/dhmjtbig" //Can be found in the Details page
var client = new pg.Client(conString);
var seq=0;

app.use(express.static('public'));

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts', 
    defaultLayout:'main'
  }
));
app.set('view engine', 'handlebars');
app.set('view options', {layout:false});

// '/' est la route racine
app.get('/', function (req, res) {
  res.render('pageAccueil',{layout: "layoutAccueil", css: "Accueil", section: "Accueil"});
});
/* page avec un formulaire "d'inscription" */
app.get('/form', function (req, res) {
    /*Insertion base de données */
  if(req.query.send==1) {
    seq=seq+1;
    client.connect();
    let params = seq+",'"+req.query.txtNom+"','"+req.query.txtNbr+"','"+req.query.txtMail+"','"+req.query.txtEntr+"','"+req.query.txtSite+"','"+req.query.txtMsg+"'";
    console.log(params);
    let requete="Insert into Contact(IdCon,Nom,Mobile,Email,Societe,SiteE,Message) values ("+params+")";
    client.query(requete,(err, res) => {
      console.log(err, res);
      client.end();
    });
    res.render('pageAccueil',{layout: "layoutAccueil",css: "Accueil", section: "Accueil"});
  }
  else {
    let email="";
    if(req.query.email!=""){
      email = req.query.email;
    }
    console.log(email);
    res.render('pageFormulaire',{layout: "layoutAccueil", mail: email,  css: "Formulaire", section: "Formulaire"});
  }
});
/* page a propos de nous */
app.get('/nous', function (req, res) {
  res.render('pageApropos',{layout: "layoutAccueil", css: "Apropos", section: "Apropos"});
});

/* page de SOCIAL MEDIA MARKETING */
app.get('/GoogleYoutubeAds', function (req, res) {
  res.render('ads/pageGoogleYoutubeAds',{layout: "layoutAds", css:"YoutubeGoogle", section: "Google & Youtube Ads"});
});
app.get('/Emailing', function (req, res) {
  res.render('ads/pageEmailing',{layout: "layoutAds", css:"Emailing", section: "Emailing"});
});
app.get('/Facebook', function (req, res) {
  res.render('ads/pageFacebook',{layout: "layoutAds", css:"Facebook", section: "Facebook"});
});
app.get('/Influenceur', function (req, res) {
  res.render('ads/pageInfluenceur',{layout: "layoutAds", css:"Influenceur", section: "Influenceur"});
});


/* page de création */
app.get('/siteEcommerce', function (req, res) {
  res.render('creation/pageCreationE', {layout:"layoutCreation", css: "E", section: "Création d'un site e-Commerce"});
});
app.get('/siteVitrine', function (req, res) {
  res.render('creation/pageCreationV', {layout:"layoutCreation", css: "V", section: "Création d'un site Vitrine"});
});
app.get('/siteInternet', function (req, res) {
  res.render('creation/pageCreationS', {layout:"layoutCreation", css: "S", section: "Création d'un site internet"});
});

app.listen(4000, function () {
  console.log("Lancement du serveur sur le port 4000 !");
});