import express from "express";

const app = express();
import { sendmail } from "./controller/sendmail.js";

app.get("/", (req, res) => {
  res.send("I'm here");
});

app.get("/email", sendmail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I'm live on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
