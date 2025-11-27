// crud operations in mongodb
use("crudDb")

// create collection
// db.createCollection("courses")

// // insert one document
// db.courses.insertOne({
//     name:"Jay",
//     Age:21
// })

// // insert multiple documents
// db.courses.insertMany([
//   { "name": "Jay", "Age": 21 },
//   { "name": "Raj", "Age": 22 },
//   { "name": "Amit", "Age": 23 },
//   { "name": "Neha", "Age": 20 },
//   { "name": "Karan", "Age": 24 },
//   { "name": "Priya", "Age": 19 },
//   { "name": "Vishal", "Age": 25 },
//   { "name": "Sneha", "Age": 22 },
//   { "name": "Rohan", "Age": 23 },
//   { "name": "Meera", "Age": 21 }
// ])

// // read documents
// let a= db.courses.find({name:"Jay"})
// // console.log(a)
// console.log(a.count())

//update 
// db.courses.updateOne({name:"Jay"},{$set:{name:"Namra"}})

// db.courses.updateMany({age:21},{$set:{age:20}})

// delet
// db.courses.deleteOne({name:"Jay"})

