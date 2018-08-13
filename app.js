var express = require('express')
var app = express()

// The code below will display 'Hello World How is it going!' to the browser when you go to http://localhost:3000
app.get('/', function (req, res) {
  res.send('This is an example using Heroku to deploy a node.js web app') 
})

var port = process.env.PORT || '3000';

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;