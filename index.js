var express = require('express');
var app = express();
const handlebars = require('express-handlebars');

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
  res.render('pageAccueil',{layout: "layoutAccueil", section: "accueil"});
});

/* page de SOCIAL MEDIA MARKETING */
app.get('/GoogleYoutubeAds', function (req, res) {
  res.render('ads/pageGoogleYoutubeAds',{layout: "layoutAds", css:"YoutubeGoogle", section: "Google - Youtube Ads"});
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