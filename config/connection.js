const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/socialnet';

const connection = mongoose.createConnection(uri);

connection.on('error', (err) => {
  console.error('MongoDB error', err);
});

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

module.exports = connection;
