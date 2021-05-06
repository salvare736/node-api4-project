console.log('Hello world!');

require('dotenv').config();

const path = require('path');

const express = require('express');

const server = express();

const PORT = process.env.PORT || 4000;

server.use(express.static(path.join(__dirname, 'client/build')));

server.use(express.json());

server.get('/api/*', (req, res) => {
  res.json({
    specialMessage: 'Sergio from Web 41 checking in!',
  });
});

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});
