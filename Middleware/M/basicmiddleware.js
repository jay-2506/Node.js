// basic meddleware

const express = require("express");
const app = express();



function myMiddleware(req, res, next) {
  console.log("Middleware is executed");
  next();
}

app.use(myMiddleware);
app.get("/", (req, res) => {
  res.send("Jay Patel");
});

app.listen(3000, () => {
  console.log("Server start successfully");
});
