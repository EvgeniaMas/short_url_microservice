var express = require('express');
var app = express();

require('dotenv').config();
app.set('port', (process.env.PORT || 8080));

app.use(express.static('public'));

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/short-url';


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  app.get('/', function(req, res) {
        res.sendFile(__dirname + '/public/html/index.html');
    });


    var newurl = require('./routes/new');
    var redirecturl = require('./routes/redirection');
    
    newurl(app, db);
    redirecturl(app, db);
    
    
   
    app.listen(app.get('port'), function() {
        console.log('Express server listening on port', app.get('port'));
    });

});
    