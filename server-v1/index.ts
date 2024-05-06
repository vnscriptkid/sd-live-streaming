const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket: any) => {
  console.log('A user connected');

  // File to store the video stream
  const filename = `stream-${Date.now()}.webm`;
  const filePath = __dirname + `/public/${filename}`;
  const fileStream = fs.createWriteStream(filePath);

  socket.on('stream', (data: any) => {
    fileStream.write(data); // Write received stream data to file
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    fileStream.end(); // Close the file stream when user disconnects
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
