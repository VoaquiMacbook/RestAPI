// config/db.js

const mongoose = require('mongoose');

// Connection URL. This is where your MongoDB server is running.
const url = 'mongodb://localhost:27017/MyDatabase';

function connect() {
  // Connect to MongoDB
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  // Get default connection
  const db = mongoose.connection;

  // Bind connection to error event
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB successfully!');
  });
}

module.exports = { connect };
