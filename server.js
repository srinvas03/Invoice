var port = 1338,
express = require('express'),
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app);
 
 
app.use('/', function(req, res){
    res.sendFile(__dirname + '/invoice.html');
});
app.use(function(req, res) {
    res.sendfile(__dirname + '/invoice.html');
});
 
 
 
http.listen(port, function(){
    console.log("Node server listening on port " + port);
});