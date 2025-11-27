// const http = require("http");
// const myserver = http.createServer((req,res)=> {
//     console.log("New req rec.")
//     res.end("Hello Jay Patel")

// });

// myserver.listen(2000, () => console.log("Server Started"));

// const http = require("http");
// const myserver = http.createServer((req,res)=> {
//     console.log(req.headers)
//     res.end("Hello Jay Patel")

// });

// myserver.listen(2000, () => console.log("Server Started"));



const http = require("http");
const fs = require("fs")
const myserver = http.createServer((req,res)=> {
    const log = `${Date.now()}:New req Recived\n`;
    fs.appendFile('log.txt',log,(err,Data)=>{
    res.end("Hello Jay Patel")

    })

  

});

myserver.listen(2000, () => console.log("Server Started"));

