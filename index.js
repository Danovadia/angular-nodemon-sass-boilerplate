var express = require('express');
var _ = require('lodash');
var app = express();

app.use('/dist', express.static('dist'));
app.use('/public', express.static('public'));
app.use('/bower_components',  express.static('bower_components'));

app.get('/', function(req, res){
	res.type('html').sendFile(__dirname + '/index.html');
  console.log(__dirname + '/index.html');
});

app.get('/api/:API', function(req, res){
	res.type('json').sendFile(__dirname + '/api/' + req.params.API + '.json', function(err) {
    if (err) {
      res.send('No API ' + req.params.API + 'was found.')
    }
  });
});

app.listen(4000, function () {
  console.log('App is up in port 3000!')
})
