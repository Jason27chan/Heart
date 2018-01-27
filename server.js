var express = require("express");
var bodyParser = require("body-parser")
var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get("./chatroom", (req, res) => {
	res.get("./chatroom.html")
})

var server = app.listen(3000, () => {
	console.log("server is listening on port", server.address().port);
});