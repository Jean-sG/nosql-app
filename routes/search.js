var client = require('./connection.js');

/*
//pour la requete en dur, l'utilisateur rentrera sa requete sous forme de texte en format json
var user_input ="";
client.search({
  index: 'movies',
  type: 'movie',
  user_input
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});*/

var input ="George Clooney";
//pour la barre de recherche, juste faire varier george clooney pour rechercher partout
client.search({
  index: 'movies',
  type: 'movie',
  q: input
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});
/*
//POUR LE formulaire, faire varier fields.title et star wars
client.search({
  index: 'movies',
  type: 'movie',
  body: {
        query: {
            match: {
                "fields.title": 'Star Wars'
            }
        }
    }
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});*/
