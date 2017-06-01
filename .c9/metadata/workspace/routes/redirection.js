{"changed":true,"filter":false,"title":"redirection.js","tooltip":"/routes/redirection.js","value":"var assert = require('assert');\nmodule.exports = function(app, db) {\n    app.get('/:shorturl', function(request, response){\n        var shorturl = parseInt(request.params.shorturl);\n         db.collection('short').find({ \"short_url\": shorturl }).toArray(function(err, docs) {\n                assert.equal(err, null);\n               \n                if (docs.length == 0) {\n                    response.status(404).json({ error: \"url is not valid\"});\n                } \n               \n                else {\n                    response.redirect(docs[0].long_url);\n                }\n                \n            });\n        \n    });\n};","undoManager":{"mark":-2,"position":26,"stack":[[{"start":{"row":10,"column":56},"end":{"row":10,"column":59},"action":"remove","lines":["URL"],"id":2},{"start":{"row":10,"column":56},"end":{"row":10,"column":57},"action":"insert","lines":["u"]}],[{"start":{"row":10,"column":57},"end":{"row":10,"column":58},"action":"insert","lines":["r"],"id":3}],[{"start":{"row":10,"column":58},"end":{"row":10,"column":59},"action":"insert","lines":["l"],"id":4}],[{"start":{"row":10,"column":60},"end":{"row":10,"column":61},"action":"insert","lines":["i"],"id":5}],[{"start":{"row":10,"column":61},"end":{"row":10,"column":62},"action":"insert","lines":["s"],"id":6}],[{"start":{"row":10,"column":62},"end":{"row":10,"column":63},"action":"insert","lines":[" "],"id":7}],[{"start":{"row":10,"column":63},"end":{"row":10,"column":64},"action":"insert","lines":["n"],"id":8}],[{"start":{"row":10,"column":64},"end":{"row":10,"column":65},"action":"insert","lines":["o"],"id":9}],[{"start":{"row":10,"column":65},"end":{"row":10,"column":66},"action":"insert","lines":["t"],"id":10}],[{"start":{"row":10,"column":66},"end":{"row":10,"column":67},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":10,"column":66},"end":{"row":10,"column":67},"action":"remove","lines":[" "],"id":12}],[{"start":{"row":10,"column":65},"end":{"row":10,"column":66},"action":"remove","lines":["t"],"id":13}],[{"start":{"row":10,"column":65},"end":{"row":10,"column":66},"action":"remove","lines":["i"],"id":14}],[{"start":{"row":10,"column":65},"end":{"row":10,"column":66},"action":"insert","lines":["t"],"id":15}],[{"start":{"row":10,"column":66},"end":{"row":10,"column":67},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":10,"column":67},"end":{"row":10,"column":68},"action":"remove","lines":["n"],"id":17}],[{"start":{"row":12,"column":15},"end":{"row":12,"column":72},"action":"remove","lines":[" // if it is in the database then respond with the result"],"id":18}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":60},"action":"remove","lines":[" // if not in the database respond with error"],"id":19}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":42},"action":"remove","lines":[" // check if url is in the database"],"id":20}],[{"start":{"row":5,"column":7},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":21}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":[" "],"id":22}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":[" "],"id":23}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":[" "],"id":24}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":[" "],"id":25}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":[" "],"id":26}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":[" "],"id":27}],[{"start":{"row":0,"column":31},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":28}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":31},"end":{"row":0,"column":31},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1496331990851}