var express = require('express')
var router = express.Router();
var crypto = require('crypto');
var app = express()
const search = require('./routes/search.js');
app.use(express.static('public'));
app.set('view engine', 'ejs')

 
app.get('/', function (req, res) {
  res.render('index');
})

app.get('/movies', function (req, res) {
   
})

router.post('/search', function(req,res,next){
        search.Search_Movie(req.body.searchmovie,(err, test) => {
        res.json(test);
  })
   
})
router.post('/search_with_form', function(req,res,next){
    var send ={title:'',director:'',genre : '',year:''};
    if(!req.body.title)
        {
            send.title= req.body.title;
        }
        search.Search_WithForm(send.title,(err, test) => {
        res.json(test);
  })
   
})

router.post('/search_with_JSON', function(req,res,next){
    var send ={title:'',director:'',genre : '',year:''};
  
    search.Search_WithJson(req.body.json,(err, test) => {
    res.json(test);
                        
  })  
})

 
app.listen(3000, function () {
  console.log('listening on port 3000!')
})


