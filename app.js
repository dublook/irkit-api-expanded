var express = require('express');
var app = express();
var http = require('http');

app.post('/regza/volume/up/:delta', function(req, res) {
  var delta = req.params.delta;
  var regzaPowerOn = 'https://api.getirkit.com/1/messages?clientkey=984FD109AFDE41CA81367D7518BA49AF&deviceid=D957F94D26684A85BED5DEEF7AC79781&message={"format":"raw","freq":38,"data":[935,50610,17421,8755,1190,1037,1190,1037,1190,1037,1190,1037,1190,1037,1190,1037,1190,3228,1190,1037,1190,3228,1190,3228,1190,3228,1190,3228,1190,3228,1190,3228,1190,1037,1190,3228,1190,1037,1190,3228,1190,1037,1190,1037,1190,3228,1190,1037,1190,1037,1190,1037,1190,3228,1190,1037,1190,3228,1190,3228,1190,1037,1190,3228,1190,3228,1190,3228,1190,65535,0,13693,17421,4400,1190]}';
  http.post(regzaPowerOn, function(irkitApiRes) {
    res.send({
      "requestedAction": "regza-volume-up",
      "param-delta": delta
    });
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
