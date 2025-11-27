// product

use("product")
// console.log(db)
db.createCollection("product")


db.products.insertMany([
  {
    name: "Laptop",
    price: 55000,
    stock: 10
  },
  {
    name: "Mouse",
    price: 500,
    stock: 50
  },
  {
    name: "Keyboard",
    price: 900,
    stock: 30
  }
])