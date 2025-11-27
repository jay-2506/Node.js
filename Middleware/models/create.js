import express  from 'express'

import mongoose from 'mongoose'


import User from './User.js';

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/validationDemo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Create User Route
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
