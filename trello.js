

var http = require("http"),
url = require("url"),
path = require("path"),
fs = require("fs");

http.createServer(function (req, res) {

  fs.readFile('./trello.html',function (err,data){
    res.end(data);
  });
}).listen(8080, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8080/");
