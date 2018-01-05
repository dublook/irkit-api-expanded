var express = require('express');
var app = express();
var request = require('request');
var async = require('async');

const irkitUrl = 'https://api.getirkit.com/1/messages?clientkey=984FD109AFDE41CA81367D7518BA49AF&deviceid=D957F94D26684A85BED5DEEF7AC79781&message=';

app.post('/regza/volume/up/:delta', function(req, res) {
  var delta = req.params.delta;
  console.log('try to volume up ' + delta);
  var array = [];
  for (var i = 0; i < Number(delta); i++) array.push(i);
  var url = irkitUrl + '{"format":"raw","freq":38,"data":[17421,8755,1073,1073,1073,1073,1073,1073,1073,1073,1073,1073,1073,1073,1073,3341,1073,1073,1073,3341,1073,3341,1073,3341,1073,3341,1073,3341,1073,3341,1073,1073,1073,3341,1073,1073,1073,3341,1073,1073,1073,3341,1073,3341,1073,1073,1073,1073,1073,1073,1073,3341,1073,1073,1073,3341,1073,1073,1073,1073,1073,3341,1073,3341,1073,3341,1073,65535,0,13693,17421,4400,1073]}';
  var reqOptions = {
    url: url,
    method: 'POST'
  };
  async.mapSeries(array, function(i, callback) {
    console.log(i);
    request.post(reqOptions, callback);
  }, function(err, asyncRes) {
    res.send({
      "requestedAction": "regza-volume-up",
      "param-delta": delta
    });
  });
});

app.post('/regza/volume/down/:delta', function(req, res) {
  var delta = req.params.delta;
  console.log('try to volume down ' + delta);
  var array = [];
  for (var i = 0; i < Number(delta); i++) array.push(i);
  var url = irkitUrl + '{"format":"raw","freq":38,"data":[17421,8755,1190,1037,1190,1037,1190,1037,1190,1037,1190,1037,1190,1037,1190,3228,1190,1037,1190,3228,1190,3228,1190,3228,1190,3228,1190,3228,1190,3228,1190,1037,1190,3228,1190,1037,1190,3228,1190,3228,1190,3228,1190,3228,1190,1037,1190,1037,1190,1037,1190,3228,1190,1037,1190,1037,1190,1037,1190,1037,1190,3228,1190,3228,1190,3228,1190]}';
  var reqOptions = {
    url: url,
    method: 'POST'
  };
  async.mapSeries(array, function(i, callback) {
    console.log(i);
    request.post(reqOptions, callback);
  }, function(err, asyncRes) {
    res.send({
      "requestedAction": "regza-volume-down",
      "param-delta": delta
    });
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
