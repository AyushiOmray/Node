const express = require("express");
const app = express();
var path = require('path');

console.log(__dirname);
app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

var server = app.listen(8081, ()=>{
  var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

app.get('/', function (req, res) {
  res.sendFile('navbar.html', {root : path.join(__dirname, './public')});
});
