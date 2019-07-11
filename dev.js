const express = require('express')
const app = express()
 
// app.get('/', function (req, res) {
// })

app.use("/", express.static("./"))


 
app.listen(3000)