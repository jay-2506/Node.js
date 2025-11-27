// user

use("userdata")

// db.createCollection("user")

db.users.insertMany([
  {
    name: "Jay",
    email: "jay@example.com",
    age: 21
  },
  {
    name: "Meet",
    email: "meet@example.com",
    age: 19
  },
  {
    name: "Aryan",
    email: "aryan@example.com",
    age: 20
  }
])
