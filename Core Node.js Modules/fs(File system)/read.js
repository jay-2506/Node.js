// c-create and write file system//
const fs = require('fs');
const path = require('path');


const filename = "test.txt";
const filepath = path.join(__dirname, filename);
// console.log(__dirname);


// const writefile = fs.writeFileSync(
//         // filename,
//         filepath,
//         "Jay Patel Dehgam",
//         "utf8"
       
// );
// console.log(writefile);

// // r-read file system//

// const readfile = fs.readFileSync(filepath,"utf8")
// // console.log(readfile.toString())
// console.log(readfile)


// a-append file system//

// const appendfile = fs.appendFileSync(
//         filepath,
//         "\nJay Patel Gujarat",
//         "utf8"
// );
// console.log(appendfile);


// d-delete file system//

// const deletefile = fs.unlinkSync(filepath);
// console.log(deletefile);


// r-renaming file system//

const newFilename = "new.txt"
const newFilepath = path.join(__dirname, newFilename);
const renamefile = fs.renameSync(filepath,newFilepath);
console.log(renamefile);
