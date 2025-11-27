const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //to read the body of incoming HTTP requests.
const router = require("./routes/Contact");
// const { default: mongoose } = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

const Contact = require("./routes/Contact");
app.use("/api", router);

// connect mongoose to mongodb
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to mongodb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectToDB();

app.listen(port, () => {
  console.log("Server start");
});
