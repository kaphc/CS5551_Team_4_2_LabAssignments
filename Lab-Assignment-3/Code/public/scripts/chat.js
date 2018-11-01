// socket connection
var socket = io.connect('');

var message = document.getElementById('message');
var handle = localStorage['logged_user'] || 'Your friend';
var button = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

button.addEventListener('click', function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle
    });
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle)
});

socket.on('chat',function (data) {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing',function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message....' + '</em></p>';
});