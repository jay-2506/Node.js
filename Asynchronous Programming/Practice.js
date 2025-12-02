const fs = require("fs");

function readFile(path, callback) {
  // If callback is provided → use callback style
  if (callback) {
    return fs.readFile(path, "utf8", callback);
  }

  // If no callback → return a Promise
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// // Using Promise

// readFile("test.txt")
//   .then(data => console.log("Promise:", data))
//   .catch(err => console.log(err));

//  Using Callback
readFile("test.txt", (err, data) => {
  if (err) return console.log(err);
  console.log("Callback:", data);
});
