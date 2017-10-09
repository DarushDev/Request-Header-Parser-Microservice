// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  var ipaddress = request.headers['x-forwarded-for'].split(',')[0] || request.connection.remoteAddress;
  var language = request.headers['accept-language'].split(',')[0];
  var software = request.headers['user-agent'].match(/\((.*?)\)/)[1];
  var result = {
    ipaddress:ipaddress,
    language:language,
    software:software
  }
  //console.log(request.headers);
  response.send(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
