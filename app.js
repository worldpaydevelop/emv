var express = require('express');
var minimist = require('minimist');
var httpProxy = require('http-proxy');
var http = require('http');
var path = require('path');

var app = express();
var parsedOptions = minimist(process.argv.slice(2));
var portToUse = parsedOptions.port || 8702;

app.set('port', portToUse);
app.use(express.static(path.join(__dirname, './')));

if ( parsedOptions.proxy ) {
    console.log("Proxying to " + parsedOptions.proxy);
    var restProxy = httpProxy.createProxyServer();
    var options = {target: parsedOptions.proxy, changeOrigin:true};
    var pathMatch = "/ocx-web/rest/ui/*";
    app.all(pathMatch, function (req, res) {
        req.headers[ 'ocxui.development.header'] = 'f8f1ca743dfe7ecbb82c6b26';
        req.socket.setNoDelay(true);
        restProxy.web(req, res, options);
    });

    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express Web listening on port: " + app.get('port'));
    });
}
else {
    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express Web listening on port: " + app.get('port'));
    });
}