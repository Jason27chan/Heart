var socket = io()
$(() => {
	$("#send").click(() => {
	  var message = {name: $("#name").val(), message: $("#message").val() }
	  postMessage(message)  
	});

	getMessages();
});

socket.on('message', addMessage)

function addMessage(message) {
	//maybe here if you do $(forummessages).append(a div class with css of a box) it might work
	$("#forummessages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}

function getMessages() {
	$.get("http://localhost:3000/forumposts", (data) => {
  data.forEach(addMessage);
})
}

function postMessage(message) {
	$.post("http://localhost:3000/forumposts", message)
}