var express = require("express");
var bodyParser = require("body-parser")
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var messages = [
	{name: 'Tim', message: 'hi'},
	{name: 'Jans', message: 'hello'}
]

app.get("./chatroom", (req, res) => {
	res.get("./chatroom.html")
})
app.get("./forum", (req, res) => {
	res.get("./forum.html")
})

app.get('/messages', (req, res) => {
	res.send(messages);
})

app.get('/number', (req, res) => {
	res.send(number);
})

app.post('/messages', (req, res) => {
	//console.log(req.body)
	io.emit('message', req.body)
	messages.push(req.body)
	res.sendStatus(200);
})

io.on('connection', (socket) => {
	console.log("a user has connected")
})

var server = http.listen(3000, () => {
	console.log("server is listening on port", server.address().port);
});