var express = require('express');
var app = express();

app.use(express.static(__dirname));

function sortString(string) {
  return string.split('').sort().reverse().join();
};

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  res.send(req.body);
})

app.listen(8080, function() {
  console.log('Listening on port 8080');
});
