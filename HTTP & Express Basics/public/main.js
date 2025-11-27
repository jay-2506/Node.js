const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Jay Patel')
}) 

app.post('/', (req, res) => {
  res.send('Hello World!!!')
})
app.put('/', (req, res) => {
  res.send('Hello World put!!!') //use for update 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})