const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const User = require('./models/User');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
//TODO - Replace you Connection String here
//mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority
const DB_HOST="cluster0.aggzi5g.mongodb.net"
const DB_USER="alvaroaguirremeza"
const DB_PASSWORD="Charmander3"
const DB_NAME="capstone-databse"
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(bodyParser.json());
app.use(cors()); 
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db();
    const usersCollection = db.collection('users');
    // Check if the user exists in the database
    const user = await usersCollection.findOne({ username, password });
   
    if (user) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid username or password' });
    }

    await client.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Internal server error connection :(' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});