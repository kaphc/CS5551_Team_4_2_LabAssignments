// required packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socket = require('socket.io');

// app set up
var app = express();
const port = process.env.PORT || 3000;
var server = app.listen(port, function(){
    console.log("server started at port number : " + port);
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const route = require('./routes/users');
app.use('/lab-3', route);

// including static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// socket setup
var io = socket(server);
io.on('connection', function (socket) {
    console.log("socket connection successful : " + socket.id)

    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });
    
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    })
});