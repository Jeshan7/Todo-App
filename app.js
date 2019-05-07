const express = require("express"),
      path = require("path"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      handle = require("express-handlebars");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect("mongodb://localhost:27017/todo");
var db = mongoose.conection;

// db.on('error', console.error.bind(console, "Connection Error"));

app.engine('handlebars',handle());
app.set('view engine','handlebars');
app.use('/public',express.static(path.join(__dirname,'public')));

var routes = require("./routes/routes");
app.use('/', routes);

app.listen(3000, ()=>{
  console.log("Connected ....");
})
