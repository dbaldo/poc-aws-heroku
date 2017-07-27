var express = require('express');
var util = require('./util.js');
var cloudStorage = require('./cloud-storage.js');
var bodyParser = require('body-parser');

var app = express();
var cloud = new cloudStorage();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//GET /
app.get('/', function(req, res) {
  
  var data = { 
      chassi: "98HGK9990HZ299999",
      setor: "PAOFF",
      modelo: "HT5NJX930",
      cor: "NH731J",
      date_in: new Date(),
      time_in: "12:00",
      date_out: new Date(),
      time_out: "12:00"     
    };

  res.render('index', data);

});

//POST /
app.post('/', function(req, res) {
  
  var returnData = req.body;

  returnData.messageText = util.rpad(req.body.setor,5,' ') + 
      util.rpad(req.body.chassi,17,' ') + 
      util.rpad(req.body.modelo,9,' ') + 
      util.rpad(req.body.cor,7, ' ') + " B " + 
      util.clearDateTime(req.body.date_in + req.body.time_in) + 
      util.clearDateTime(req.body.date_out + req.body.time_out) + "04N"; 
  
  cloud.uploadText("msg-" + new Date().toISOString(), returnData.messageText);

  res.render('index', req.body);

});

//LISTEN : 5000
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


