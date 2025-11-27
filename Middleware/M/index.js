const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/PD");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// save
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next;
});

userSchema.post("save", function (doc, next) {
  console.log("A new user saved:", doc);
  next();
});

// // remove

userSchema.post("remove", function (user, next) {
  console.log("A  user remove:", user);
  next();
});

userSchema.post("find", function (docs) {
  console.log("found user:", docs);
});
// update
userSchema.pre("update", function (user) {
  console.log("update user:", user);
});

// create user model
const User = mongoose.model("User", userSchema);

// router create

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
// router find
app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }

    await user.deleteOne({ _id: user._id });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// update

app.put("/user/:id", async (req, res) => {
  try {
    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, 
     { new: true,
    });

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server start ${PORT}`);
});
