app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// error handle
app.use((error, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something brokenn");
});

// thired party middlewaere

const morgan = require("morgan");
app.use(morgan("dev"));

// rout-specific middleware
app.get("/protected", mymiddleware, (req, res) => {
  res.send("This is protected router");
});
