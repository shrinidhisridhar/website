var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.send('<img src="/static/helloworld.gif"/>');
});

app.listen(19921, function () {
  console.log('Example app listening on port 3000!');
});