var express = require('express');
var app = express();

app.get('/regza/volume/up/:delta', function(req, res) {
  var delta = req.params.delta;
  res.send({
    "requestedAction": "regza-volume-up",
    "param-delta": delta
  });
});

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
