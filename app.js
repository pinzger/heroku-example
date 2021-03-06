var express = require('express')
var app = express()

// The code below will display 'Hello World How is it going!' to the browser when you go to http://localhost:3000
app.get('/', function (req, res) {
  var message = "Hello World!"
//  message += "\nUsing pull-based development model on GitHub"
  res.send(message) 
})

var port = process.env.PORT || '3000';

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;