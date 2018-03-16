var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

//pour la barre de recherche, juste faire varier george clooney pour rechercher partout
client.search({
  index: 'movies',
  type: 'movie',
  q: 'George Clooney'
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
