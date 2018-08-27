const express = require('express');

const server = express();

const db = require('./data/db.js')

// configure middleware
server.use(express.json())

// configure routing
server.get('/', (req, res) => {
  res.send('Helloooo! Server works')
});

server.get('/users', (req, res) => {
  db.find().then(users => {
    res.status(200).json(users)
  }).catch(err => {
    console.error('error', err);

    res.status(500).json({ message: 'Error retrieving data'})
  });
})

server.listen(9000, ()=>console.log('Hello!'))
