const fs = require("fs");

console.log("1 Start");

setTimeout(() => {
  console.log("4 Timeout finished (Timer API)");
}, 0);


fs.readFile("sample.txt", "utf8", () => {
  console.log("5 File read completed (Thread Pool)");
});

console.log("2 End of main script");

for (let i = 0; i < 3; i++) {
  console.log("3 Sync Loop:", i);
}

