var http = require('http');
var fs = require('fs');

var htmlFile;
var cssFile;

fs.readFile('index.html', function(err, data) {
    if (err) {
        throw err;
    } 
    htmlFile = data;
});

fs.readFile("main.css", function(err, data) {
    if(err) {
        throw err;
    }
    cssFile = data;
});


http.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type": "text/css"});
    response.write(cssFile);
    response.end();

    response.writeHead(200, {"Content-Type": "text.html"});
    response.write(htmlFile);
    response.end();

}).listen(3333);
