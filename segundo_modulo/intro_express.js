const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<b> Hola </b> <brMundo>')
})
 
app.listen(3000)