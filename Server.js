var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.set('Content-Type', 'text/plain');
    res.send("hello");
});

var rest = require("./api");
var api = new rest(app);

app.listen(8000, function () {
    console.log('App listening on port 8000!');
});








