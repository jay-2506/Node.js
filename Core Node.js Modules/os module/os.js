const os = require('os');


console.log("peltform:", os.platform());//darwin, win32, linux
console.log("CPU arch:", os.arch());//x64, arm, ia32
console.log("User:", os.userInfo());//username, homedir, shell
console.log("System uptime (seconds):", os.uptime());//in seconds
console.log("Total memory (bytes):", os.totalmem());//in bytes
console.log("Free memory (bytes):", os.freemem());//in bytes
console.log("CPU info:", os.cpus());//array of CPU cores
console.log("Network interfaces:", os.networkInterfaces());//object with network interfaces
console.log("Home directory:", os.homedir());//home/user     