var express = require('express');
var app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'The index page!' })
});

app.listen(19921, function () {
  console.log('Example app listening on port 19921!');
});