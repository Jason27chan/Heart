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
	$("#forummessages").append(
		`<div class="forum-message">
			<h4>${message.name}</h4> 
			<p>${message.message}</p>
		</div>`
	)
}

function getMessages() {
	$.get("http://localhost:3000/forumposts", (data) => {
  data.forEach(addMessage);
})
}

function postMessage(message) {
	$.post("http://localhost:3000/forumposts", message)
}