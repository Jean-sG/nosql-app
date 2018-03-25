var express = require('express')
var router = express.Router();
var app = express()
const search = require('./routes/search.js');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


app.listen(80);
app.use(express.static('public'));
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Nosql app' });
    
});


app.get('/result', function(req, res, next) {
  res.render('result', { title: 'Nosql app Result' });
    
});

app.post('/api/search', function (req, res) {
    search.Search_Movie(req.body.searchmovie,(err, test) => {
    res.json(test); 
})
    res.render('result', { title: 'Nosql app' });
});
 
app.post('/api/search_with_form',jsonParser, function(req,res,next){
 
    var myObj = {"must":[]}
    
    if(!req.body.searchtitle){
    var title = {"match": {"fields.title": req.body.searchtitle}};
    myObj.must.push(title);
    }
    if(!req.body.searchdir){
    var dir = {"match": {"fields.directors":req.body.searchdir}};
    myObj.must.push(dir);
    }
    
    if(!req.body.searchgenre){
    var genre = {"match": {"fields.genres": req.body.searchgenre}} 
    myObj.must.push(genre);
    }
    
    if(!req.body.searchyear){
    var year = {"match": {"fields.year": req.body.searchyear}};
    myObj.must.push(year);
    }
    
    search.Search_WithForm(myObj,(err, test) => {
        res.json(test);
        })
         res.render('result', { title: 'Nosql app' });
})

app.post('/api/search_with_json',jsonParser ,function(req,res,next){
    search.Search_WithJSON(req.body.json,(err, test) => {
    res.json(test);                        
  })
     res.render('result', { title: 'Nosql app' });
})

 
app.listen(3000, function () {
  console.log('listening on port 3000!')
})