var express = require("express");
var bodyParser = require("body-parser")
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose')
var mongoose2 = require('mongoose')
//password to mLab is Hearts4

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var dbUrl = 'mongodb://user:user@ds117848.mlab.com:17848/hearts'

var dbUrlforum = 'mongodb://forumuser:forumuser@ds117858.mlab.com:17858/heartsforum'

var Message = mongoose.model('Message', {
	name: String,
	message: String
})

var forumMessage = mongoose2.model('forumMessage', {
	name: String,
	message: String
})

var messages = [
	{name: 'Tim', message: 'hi'},
	{name: 'Jans', message: 'hello'}
]

var forummessages = [
	// {name: 'hi', message: 'meme'}
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

app.get('/forumposts', (req, res) => {
	res.send(forummessages);
})

app.get('/number', (req, res) => {
	res.send(number);
})

app.post('/messages', (req, res) => {
	var message = new Message(req.body)
	message.save((err) => {
		if (err) {
			sendStatus(500)
		}
		messages.push(req.body)
		io.emit('message', req.body)
	
		res.sendStatus(200);
	})
	//console.log(req.body)
	
})

app.post('/forumposts', (req, res) => {
	//console.log(req.body)

	var forumPost = new forumMessage(req.body)
	forumPost.save((err) => {
		if (err) {
			sendStatus(500)
		}
		io.emit('message', req.body)
		forummessages.push(req.body)
		res.sendStatus(200);
	})
})

io.on('connection', (socket) => {
	console.log("a user has connected")
})

mongoose.connect(dbUrl, (err) => {
	console.log('mongo db connection', err)
})

mongoose2.connect(dbUrlforum, (err) => {
	console.log('mongo db connection', err)
})

var server = http.listen(3000, () => {
	console.log("server is listening on port", server.address().port);
});