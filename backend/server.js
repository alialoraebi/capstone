const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient , ObjectId} = require('mongodb');
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
//User
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

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db();
    const usersCollection = db.collection('users');
    
    // Check if the user exists in the database
    const user = await usersCollection.findOne({ username });
    if (user) {
      res.status(400).send({ message: 'User already exists' });
    } else {
      const result = await usersCollection.insertOne({ username, password });
      res.status(201).send({ message: 'User created successfully' });
    }

    await client.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

//Restaurant
app.get('/showDishes', async (req, res) => {
  try {
    const client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db();
    const dishesCollection = db.collection('restaurant');
    const dishes = await dishesCollection.find().toArray();
    res.status(200).send({ dishes });

    await client.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.post('/addDish', async (req, res) => {
  const { category, name, price } = req.body;

  try {
    const client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db();
    const dishesCollection = db.collection('restaurant');
    const result = await dishesCollection.findOne({name});
    
    if(result){
      res.status(400).send({ message: 'Dish already exists' });
    }
    else{
      const result = await dishesCollection.insertOne({ category, name, price });
      res.status(201).send({ message: 'Dish created successfully' });
    }
    await client.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.put('/updateDishPrice/:id', async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  try {
    const client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db();
    const dishesCollection = db.collection('restaurant');
    const result = await dishesCollection.updateOne({ _id: new ObjectId(id) }, { $set: { price } });

    if (result.modifiedCount > 0) {
      res.status(200).send({ message: 'Dish price updated successfully' });
    } else {
      res.status(404).send({ message: 'Dish not found' });
    }

    await client.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

app.delete('/deleteDish/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const client = new MongoClient(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db();
    const dishesCollection = db.collection('restaurant');
    const result = await dishesCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount > 0) {
      res.status(200).send({ message: 'Dish deleted successfully' });
    } else {
      res.status(404).send({ message: 'Dish not found' });
    }

    await client.close();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});
  


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});