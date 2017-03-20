var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
//io.set("origins", "*:*");


io.on('connection', (socket) => {
    console.log('user connected ....');

    socket.on('disconnect', () => {
        console.log('User disconnect ....');
    });

    socket.on('add-message', (message) => {
        io.emit('message', {type: 'new-message', text: message});
    });
});

http.listen(8000, () => {
    console.log('Server running in port 8000')
});