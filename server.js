var express = require("express");
var bodyParser = require("body-parser")
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose')
//Heart
//password to mLab is Hearts4

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var dbUrl = 'mongodb://user:user@ds117848.mlab.com:17848/hearts'

var Message = mongoose.model('Message', {
	name: String,
	message: String
})
var Message2 = mongoose.model('Message2', {
	name: String,
	message: String
})
var Message3 = mongoose.model('Message3', {
	name: String,
	message: String
})

var ForumMessage = mongoose.model('forumMessage', {
	subject: String,
	message: String
})

var messages = [
	{name: 'Tim', message: 'hi'},
	{name: 'Jans', message: 'hello'}
]
var messages1 = [
	{name: 'Bob', message: 'i like helicopters'}
]

var messages2 = [
	{name: 'json', message: 'i main bastion'}
]

var forummessages = [
	{subject: 'Wow what a great website', message: 'I love this page'}
]

app.get('/messages', (req, res) => {
	Message.find({}, (err, message) => {
		res.send(message)
	})
})

app.get('/messages1', (req, res) => {
	res.send(messages1);
})

app.get('/messages2', (req, res) => {
	res.send(messages2);
})

app.get('/forumposts', (req, res) => {
	ForumMessage.find({}, (err, message) => {
		res.send(message)
	})
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

app.post('/messages1', (req, res) => {
	var message = new Message2(req.body)
	message.save((err) => {
		if (err) {
			sendStatus(500)
		}
		messages1.push(req.body)
		io.emit('message', req.body)
	
		res.sendStatus(200);
	})
	//console.log(req.body)
	
})

app.post('/messages2', (req, res) => {
	var message = new Message3(req.body)
	message.save((err) => {
		if (err) {
			sendStatus(500)
		}
		messages2.push(req.body)
		io.emit('message', req.body)
	
		res.sendStatus(200);
	})
	//console.log(req.body)
	
})

app.post('/forumposts', (req, res) => {
	//console.log(req.body)

	var forumPost = new ForumMessage(req.body)
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

var server = http.listen(3000, () => {
	console.log("server is listening on port", server.address().port);
});