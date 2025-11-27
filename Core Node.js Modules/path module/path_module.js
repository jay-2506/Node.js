const path = require('path');
console.log(__dirname);
console.log(__filename);




const filepath = path.join("folder","Core Node.js Modules","test.txt");
console.log(filepath);

const parsedPath = path.parse(filepath);//give an absalute path 
const resolvedPath = path.resolve(filepath);//resolve path
const extname = path.extname(filepath);//file extension
const basename = path.basename(filepath);//file name
const dirname = path.dirname(filepath);//directory name

console.log({parsedPath, resolvedPath, extname, basename, dirname});