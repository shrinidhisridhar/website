var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('<img src="/public/hello_world.gif"/>');
});

app.listen(19921, function () {
  console.log('Example app listening on port 3000!');
});