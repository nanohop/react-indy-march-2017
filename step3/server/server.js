const express = require('express');
const path = require('path');
const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('./build'));


var globalPeople = ['John Doe', 'Sara Test'];

var globalMessages = [
  {user: 'Sara Test', message: 'Hello!'},
  {user: 'John Doe', message: 'Hello!'}
];


app.get('/people.json', function(req, res) {
  res.json(globalPeople)
});

app.post('/people.json', function(req, res) {
  globalPeople.push(req.body.name);
  res.json({success: "OK"});
});


app.get('/messages.json', function(req, res) {
  res.json(globalMessages)
});

app.post('/messages.json', function(req, res) {
  globalMessages.push({user: req.body.name, message: req.body.message});
  res.json({success: "OK"});
});


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(3001);
