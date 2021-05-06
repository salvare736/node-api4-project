console.log('Hello world!');

require('dotenv').config();

const express = require('express');

const server = express();

const PORT = process.env.PORT || 4000;

server.use(express.json());

server.get('/api/*', (req, res) => {
  res.json({
    message: 'Sergio from Web 41 checking in!',
  })
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});
