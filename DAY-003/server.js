const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Arrisha Chaudhary ....Welcome u in my hotel...how i can help you !')
})

app.get('/arisaa', function (req, res) {
  res.send('Arrisha Cha help you !')
})/

app.listen(3000,()=>{
  console.log("server is ready ")
})