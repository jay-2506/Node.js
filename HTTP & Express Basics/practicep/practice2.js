const express = require("express");
const app = express();

app.use(express.json());

// In-memory data
let posts = [];
let id = 1;

// Create post
app.post("/posts", (req, res) => {
  const post = {
    id: id++,
    title: req.body.title,
    content: req.body.content
  };

  posts.push(post);
  res.json(post);
});

// Get all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Get single post
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.json(post || { message: "Post not found" });
});

// Update post
app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) return res.json({ message: "Post not found" });

  post.title = req.body.title;
  post.content = req.body.content;

  res.json(post);
});

// Delete post
app.delete("/posts/:id", (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.json({ message: "Post deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
