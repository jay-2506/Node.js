
let fs = require('fs');

console.log("Program started")
let data = fs.readFileSync('jay.txt')

console.log(data.toString())
console.log("Program finsh")