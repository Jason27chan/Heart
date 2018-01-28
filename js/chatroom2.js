var socket = io()
$(() => {
  var animals = ["Kookaburra", "Zebra", "Giraffe", "Horse", "Armadillo"]

  var userAnimal = animals[Math.floor(Math.random() * 5)]
  $("#animal-name").append(userAnimal)

  $("#send").click(() => {
    var message = {name: userAnimal, message: $("#message").val() }
    postMessage(message)  
  });

  getMessages();
});

socket.on('message', addMessage)

function addMessage(message) {
  $("#messages").append(`
    <p> ${message.name} </p> 
    <span class="left"> ${message.message} </span>
    <div class="clear"></div>
  `)
}

function getMessages() {
  $.get("http://localhost:3000/messages2", (data) => {
    data.forEach(addMessage);
  })
}

function postMessage(message) {
  $.post("http://localhost:3000/messages2", message)
}