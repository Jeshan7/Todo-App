const express = require("express");
const Todo = require("../models/todo");

var router = express.Router();

router.get("/", (req, res) => {
  Todo.find({}).then((result)=>{
    res.render("index",{ todos: result})
  })
})

router.post("/todo", (req, res) => {
  var data = req.body.description;

  let newTodo = new Todo({
    description: data
  })

  newTodo.save().then((result)=>{
    console.log(result);
    res.redirect("/");
  }).catch((err) =>{
    console.log(err);
    res.redirect("/");
  })
})

module.exports = router;
