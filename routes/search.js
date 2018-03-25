var client = require('./connection.js');
module.exports = function (args) { }
 

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



var search = {
  Search_Movie: function(clientReq){
client.search({
  index: 'movies',
  type: 'movie',
  q: clientReq
}).then(function (body) {
      var hits = body.hits.hits;
    }, function (error) {
      console.trace(error.message);
    });
  },
    Search_WithForm: function (clientReq){
client.search({
  index: 'movies',
  type: 'movie',
  body: {
        query: {
            match: {
            clientReq
            }
        }
    }
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});
},
    Search_WithJSON : function (clientReq){
client.search({
  index: 'movies',
  type: 'movie',
  body: {
       clientReq
    }
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});
}

}
module.exports = search;





