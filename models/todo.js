const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  description: {
                 type: String,
                 required: true
               },
  done: {
          type: Boolean,
          default: false
        }
})

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
