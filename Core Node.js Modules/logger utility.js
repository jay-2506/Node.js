const fs = require("fs");
const EventEmitter = require("events");

const logger = new EventEmitter();

logger.on("log", (msg) => {
  fs.appendFileSync("logs.txt", msg + "\n");
});

logger.emit("log", "Welcome Jay Patel");
logger.emit("log", "Hello Jay Patel");