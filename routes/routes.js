const express = require("express");
const Todo = require("../models/todo");

var router = express.Router();

router.get("/", (req, res) => {
  Todo.find({}).then((result)=>{
    let todo = result.filter((result)=>{
      return !result.done;
    })

    let doneTodo = result.filter((result)=>{
      return result.done;
    })

    res.render("index",{ todos: todo, donetodos: doneTodo})
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

router.post('/todo/:id/completed', (req, res)=>{
  let todoId = req.params.id;

  Todo.findById(todoId)
    .exec()
    .then((result)=>{
      result.done = !result.done;
      return result.save()
    }).then((result)=>{
      res.redirect('/');
    })
})

module.exports = router;
