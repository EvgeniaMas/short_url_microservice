
var assert = require('assert');

module.exports = function(app, db) {
   
    app.get('/new/:url(*)', function(request, response){
        var url = request.url.slice(5);
        var httpProto = request.headers["x-forwarded-proto"];
        var myDomain = request.headers.host;
        if (url.match(/[\s]/i) || !(url.match(/[\.]/g))) {
            response.status(404).json({ error: "URL invalid"});
        }
        else { 
            if (!(url.match(/(http:\/\/)/i)) && !(url.match(/(https:\/\/)/i))) {
                url = "http://" + url;
            }
            
          
            db.collection('short').find({ "long_url": url }).toArray(function(err, docs) {
                    assert.equal(err, null);
                   
                    if (docs.length == 0) {
                        
                        db.collection('short').find().count(function(err, count) {
                            assert.equal(err, null);
                            var shortNum = count+1;
                           
                            db.collection('short').insert({ "long_url": url, "short_url": shortNum });
                            response.json({ original_url: url, short_url: httpProto + "://" + myDomain + "/" + shortNum });
                        });
                    } 
                  
                    else {
                        response.json({ original_url: docs[0].long_url, short_url: httpProto + "://" + myDomain + "/" + docs[0].short_url });
                    }
                    
                });
        }
    });
};
