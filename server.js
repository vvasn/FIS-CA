/**
 * Created by Ville Suoraniemi on 11.4.2017.
 */

// Modules
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));

// Setting up a localhost server
var server = app.listen(8081, function () {

    // Localhost
    var host = "127.0.0.1";

    // Port
    var port = server.address().port;

    console.log("Order form available at: http://%s:%s", host, port)
});