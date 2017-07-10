var socket = io();

socket.on('connect', function () {
  console.log('Connected to the server.')

  socket.emit('createMessage', {
    from: 'Andrew',
    text: 'Hi'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server.')
});

socket.on('newMessage', function (message) {
  console.log('New Message', message);
});
