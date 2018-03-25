var express = require('express')
var router = express.Router();
var app = express()
const search = require('./routes/search.js');
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()

app.use(express.static('public'));
app.set('view engine', 'ejs')

 

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Serveur Lucile' });
    
});

app.get('/api/search', jsonParser, function (req, res) {
    search.Search_Movie(req.body.searchmovie,(err, test) => {
    res.json(test);
})
});
 
app.post('/api/search_with_form',jsonParser, function(req,res,next){
 
    var myObj = {'fields.title':'star war'};
    
        search.Search_WithForm(myObj,(err, test) => {
        res.json(test);
        })
})

app.post('/api/search_with_json',jsonParser ,function(req,res,next){
    console.log(req.body.json);
    search.Search_WithJSON(req.body.json,(err, test) => {
    res.json(test);                        
  })  
})

 
app.listen(3000, function () {
  console.log('listening on port 3000!')
})


