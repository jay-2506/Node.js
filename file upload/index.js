const path = require("path");
const express = require("express");
const app = express();
const multer = require("multer");

const PORT = 3000;

const storage = multer.diskStorage({
  destination(req, file, cd) {
    return cd(null, "./uploads");
  },
  filename(req, file, cd) {
    return cd(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
// const upload = multer({ dest: 'uploads/' })
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false })); //help to pass data

app.get("/", (req, res) => {
  return res.render("HomePage");
});
app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
});

app.listen(PORT, () => console.log(`server at port:3000`));
