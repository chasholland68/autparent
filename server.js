
var bodyParser = require('body-parser');
const express = require('express');
var path = require('path');

const app = express();
var PORT = process.env.PORT || 8080;
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require("./app/routing/html-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});